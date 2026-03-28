import { describe, it, expect } from 'vitest';
import { capitalize } from '../tools';

describe('capitalize', () => {
    it('capitalizes the first letter', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    it('returns empty string unchanged', () => {
        expect(capitalize('')).toBe('');
    });

    it('handles single character', () => {
        expect(capitalize('a')).toBe('A');
    });

    it('does not modify already capitalized strings', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
});
