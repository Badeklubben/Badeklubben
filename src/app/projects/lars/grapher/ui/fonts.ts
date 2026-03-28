// Font stubs using system fonts as fallback.
// When deployed with network access, replace with next/font/google imports:
// import { Silkscreen, Orbitron, Bungee_Hairline, Monoton, Audiowide } from 'next/font/google';

const makeFont = (families: string) => ({
    className: '',
    style: { fontFamily: families },
});

export const silkscreen = makeFont('"Silkscreen", monospace');
export const orbitron = makeFont('"Orbitron", monospace');
export const bungee_hairline = makeFont('"Bungee Hairline", sans-serif');
export const monoton = makeFont('"Monoton", cursive');
export const audiowide = makeFont('"Audiowide", monospace');
