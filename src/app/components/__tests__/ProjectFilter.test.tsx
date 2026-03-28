import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectFilter from '../ProjectFilter';

describe('ProjectFilter', () => {
    it('renders category buttons', () => {
        render(
            <ProjectFilter
                allTechStack={[]}
                allCategories={['webapp', 'game']}
                activeTech={new Set()}
                activeCategory=""
                onTechToggle={vi.fn()}
                onCategoryChange={vi.fn()}
            />
        );
        expect(screen.getByText('Web App')).toBeDefined();
        expect(screen.getByText('Game')).toBeDefined();
    });

    it('renders tech stack buttons', () => {
        render(
            <ProjectFilter
                allTechStack={['React', 'Firebase']}
                allCategories={[]}
                activeTech={new Set()}
                activeCategory=""
                onTechToggle={vi.fn()}
                onCategoryChange={vi.fn()}
            />
        );
        expect(screen.getByText('React')).toBeDefined();
        expect(screen.getByText('Firebase')).toBeDefined();
    });

    it('calls onCategoryChange when a category is clicked', () => {
        const onCategoryChange = vi.fn();
        render(
            <ProjectFilter
                allTechStack={[]}
                allCategories={['webapp']}
                activeTech={new Set()}
                activeCategory=""
                onTechToggle={vi.fn()}
                onCategoryChange={onCategoryChange}
            />
        );
        fireEvent.click(screen.getByText('Web App'));
        expect(onCategoryChange).toHaveBeenCalledWith('webapp');
    });

    it('returns null when no filters available', () => {
        const { container } = render(
            <ProjectFilter
                allTechStack={[]}
                allCategories={[]}
                activeTech={new Set()}
                activeCategory=""
                onTechToggle={vi.fn()}
                onCategoryChange={vi.fn()}
            />
        );
        expect(container.innerHTML).toBe('');
    });
});
