import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import flossum from './index.js';

// Get directory name for ES modules
const __dirname = fileURLToPath(new URL('.', import.meta.url));

// MIME types for static files
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png'
};

// Create HTTP server
const server = createServer(async (req, res) => {
    try {
        // Serve index.html for root path
        const path = req.url === '/' ? '/index.html' : req.url;
        const filePath = join(__dirname, 'public', path);
        const ext = extname(filePath);
        
        // Read and serve the file
        const content = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
        res.end(content);
    } catch (err) {
        res.writeHead(404);
        res.end('Not found');
    }
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Command definitions with their default texts and options
const commands = {
    type: (text = "Type something...") => 
        flossum.typeOut(text, 60),
    wave: (text = "Wave effect...") => 
        flossum.wave(text, { duration: 1800 }),
    rainbow: (text = "Rainbow text!") => 
        flossum.rainbow(text, { duration: 1500 }),
    glitch: (text = "Glitch effect...") => 
        flossum.glitch(text),
    progress: () => 
        flossum.progressBar({ width: 20, duration: 1500 }),
    spin: (text = "Loading...") => 
        flossum.spinner(text, 2000),
    ascii: async (text = "Hello!", ws) => {
        const art = await flossum.asciiArt(text);
        ws.send(art);
        return Promise.resolve();
    },
    flash: (text = "Warning!") => 
        flossum.flash(text, {flashes: 6, interval: 150}),
    delete: (text = "This will disappear...") => 
        flossum.typeDelete(text, { delay: 100, deleteDelay: 80, pause: 1000 }),
    help: async (_, ws) => {
        ws.send("Available commands:\n" +
            Object.entries(commands)
                .filter(([name]) => !['help', 'demo'].includes(name))
                .map(([name]) => `${name.padEnd(12)} - ${commandDescriptions[name]}`)
                .concat(['demo'.padEnd(12) + ' - Run full demo'])
                .join('\n') + '\n'
        );
    }
};

// Command descriptions for help text
const commandDescriptions = {
    type: 'Type out text',
    wave: 'Wave animation',
    rainbow: 'Rainbow colors',
    glitch: 'Glitch effect',
    progress: 'Show progress bar',
    spin: 'Show spinner',
    ascii: 'ASCII art',
    flash: 'Flash effect',
    delete: 'Type and delete'
};

// Helper function to run demo sequence
async function runDemoSequence(ws, wsWrite) {
    ws.send('\x1b[2J\x1b[H');
    
    // Demo messages with effects
    const demoSequence = [
        ['ascii', "Hello!"],
        ['type', "🚀 Welcome to the Flossum Demo!"],
        ['wave', "✨ Watch the magic unfold..."],
        ['type', "🌈 Feel the rainbow energy!"],
        ['glitch', "⚡ Glitch in the matrix..."],
        ['rainbow', "🌈 Taste the rainbow!"],
        ['type', "Bye bye Bloom!"],
        ['progress'],
        ['type', "🔍 Unraveling mysteries..."],
        ['spin', "⏳ Please wait..."],
        ['flash', "⚠️ Warning!"],
        ['delete', "👋 Watch this disappear!"],
        ['type', "🎉 All done! Enjoy coding!"]
    ];

    for (const [command, text] of demoSequence) {
        if (commands[command]) {
            await commands[command](text, ws);
            ws.send('\n');
        }
    }
}

// WebSocket connection handler
wss.on('connection', (ws) => {
    // Create a custom write function that sends to WebSocket
    const wsWrite = (data) => {
        // Convert Buffer to string if needed
        const str = data.toString();
        
        // Only send the final state of animations
        if (str.includes('\r')) {
            // Clear the current line
            ws.send('\x1b[2K\r');
        }
        ws.send(str);
    };
    
    // Replace process.stdout.write temporarily when running demo
    ws.on('message', async (message) => {
        const msg = JSON.parse(message);
        
        if (msg.type === 'command') {
            const [command, ...args] = msg.text.split(' ');
            const text = args.join(' ').trim();
            
            const originalWrite = process.stdout.write;
            process.stdout.write = wsWrite;
            
            try {
                if (command === 'demo') {
                    await runDemoSequence(ws, wsWrite);
                } else if (commands[command]) {
                    // Only pass text if it's non-empty, otherwise let the default text be used
                    await commands[command](text || undefined, ws);
                } else {
                    ws.send(`Unknown command: ${command}. Type 'help' for available commands.\n`);
                }
            } finally {
                process.stdout.write = originalWrite;
                ws.send('\n$ ');
            }
        }
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});