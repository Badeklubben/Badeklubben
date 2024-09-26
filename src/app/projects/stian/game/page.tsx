'use client'
import React, { useState } from 'react';
import './style.css';  // Import the global CSS

interface PredefinedNumber {
    row: number;
    col: number;
    value: number;
}

interface HorizontalArrow {
    row: number;
    col: number;
    direction: '>' | '<';
}

interface VerticalArrow {
    row: number;
    col: number;
    direction: '^' | 'v';
}

export default function Game() {
    // Predefined numbers for specific positions in the grid
    const predefinedNumbers: PredefinedNumber[] = [
        { row: 0, col: 1, value: 4 },
        { row: 1, col: 0, value: 4 },
        { row: 1, col: 2, value: 2 },
        { row: 3, col: 0, value: 2 },
        { row: 3, col: 1, value: 3 }
    ];

    // Separate predefined arrows into horizontal and vertical arrays
    const horizontalArrows: HorizontalArrow[] = [
        { row: 0, col: 0, direction: '>' },
        { row: 0, col: 1, direction: '>' },
        // Cell with both horizontal and vertical arrows
        { row: 1, col: 0, direction: '>' },
    ];

    const verticalArrows: VerticalArrow[] = [
        { row: 1, col: 2, direction: 'v' },
        { row: 1, col: 0, direction: 'v' }, // Same cell as horizontal arrow
        { row: 2, col: 1, direction: '^' },
    ];

    const numRows = 7;
    const numCols = 7;

    // Initialize the grid with empty strings, setting predefined values where applicable
    const [gridValues, setGridValues] = useState(() => {
        const initialGrid = Array.from({ length: numRows }, () =>
            Array.from({ length: numCols }, () => '')
        );

        // Set predefined values in the grid
        predefinedNumbers.forEach(({ row, col, value }) => {
            initialGrid[row][col] = value.toString();
        });

        return initialGrid;
    });

    // Function to handle dropdown change
    const handleDropdownChange = (row: number, col: number, value: string) => {
        setGridValues((prevGrid) => {
            const newGrid = prevGrid.map((arr) => arr.slice()); // Deep copy the grid
            newGrid[row][col] = value;
            return newGrid;
        });
    };

    // Function to generate a single dropdown
    const renderDropdown = (
        row: number,
        col: number,
        value: string,
        disabled: boolean = false
    ) => (
        <select
            className={`number-select ${disabled ? 'disabled-dropdown' : ''}`}
            name="number"
            value={value}
            disabled={disabled}
            onChange={(e) => handleDropdownChange(row, col, e.target.value)}
        >
            <option value=""> </option> {/* Blank space for empty dropdown */}
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
        </select>
    );

    // Function to check if a cell should be pre-filled
    const getPredefinedValue = (row: number, col: number): number | null => {
        const predefined = predefinedNumbers.find(cell => cell.row === row && cell.col === col);
        return predefined ? predefined.value : null;
    };

    // Functions to get arrows
    const getHorizontalArrow = (row: number, col: number): string | null => {
        const arrow = horizontalArrows.find(a => a.row === row && a.col === col);
        return arrow ? arrow.direction : null;
    };

    const getVerticalArrow = (row: number, col: number): string | null => {
        const arrow = verticalArrows.find(a => a.row === row && a.col === col);
        return arrow ? arrow.direction : null;
    };

    // Function to generate the grid with predefined values and arrows
    const renderGrid = () => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            const rowItems = [];
            for (let j = 0; j < numCols; j++) {
                // Render number box
                const predefinedValue = getPredefinedValue(i, j);
                const cellValue = gridValues[i][j];

                rowItems.push(
                    <div key={`cell-${i}-${j}`} className="cell">
                        {predefinedValue !== null
                            ? renderDropdown(i, j, predefinedValue.toString(), true)
                            : renderDropdown(i, j, cellValue)}
                    </div>
                );

                // Render horizontal arrow space if not the last column
                if (j < numCols - 1) {
                    const hArrow = getHorizontalArrow(i, j);
                    rowItems.push(
                        <div key={`arrow-h-${i}-${j}`} className="arrow-space">
                            {hArrow ? <div className="arrow">{hArrow}</div> : null}
                        </div>
                    );
                }
            }
            rows.push(
                <div key={`row-${i}`} className="grid-row">
                    {rowItems}
                </div>
            );

            // Render vertical arrows row if not the last row
            if (i < numRows - 1) {
                const arrowRow = [];
                for (let j = 0; j < numCols; j++) {
                    const vArrow = getVerticalArrow(i, j);
                    arrowRow.push(
                        <div key={`arrow-v-${i}-${j}`} className="arrow-space-vertical">
                            {vArrow ? <div className="arrow">{vArrow}</div> : null}
                        </div>
                    );

                    // Render empty space if not the last column
                    if (j < numCols - 1) {
                        arrowRow.push(
                            <div key={`empty-${i}-${j}`} className="arrow-space-vertical empty-space"></div>
                        );
                    }
                }
                rows.push(
                    <div key={`arrow-row-${i}`} className="grid-row">
                        {arrowRow}
                    </div>
                );
            }
        }
        return rows;
    };

    return (
        <div className="grid-container">
            <div className="grid">
                {renderGrid()}
            </div>
        </div>
    );
}
