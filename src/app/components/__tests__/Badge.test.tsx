import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('Badge', () => {
    it('renders the label text', () => {
        render(<Badge label="React" />);
        expect(screen.getByText('React')).toBeDefined();
    });

    it('applies brand color when provided', () => {
        const { container } = render(<Badge label="TypeScript" color="#E8557A" />);
        const span = container.querySelector('span');
        expect(span?.style.color).toBeTruthy();
    });
});
