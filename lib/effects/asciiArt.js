import cfonts from 'cfonts';

function getCFontsOptions({
    font = 'block',
    align = 'left',
    colors = ['system'],
    background = 'transparent'
} = {}) {
    return {
        font,
        colors,
        align,
        background,
        gradient: false,
        independentGradient: false,
        transitionGradient: false,
        env: 'node'
    };
}

export async function asciiArt(text, options = {}) {
    const result = cfonts.render(text, getCFontsOptions(options));
    return result.string;
}