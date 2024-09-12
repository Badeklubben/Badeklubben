import React from 'react';
import Person from './Person';

interface PersonListProps {
    personer: Person[];
    onUpdate: (name: string, change: number) => void;
    onRemove: (name: string) => void;
}

const PersonList: React.FC<PersonListProps> = ({ personer, onUpdate, onRemove }) => {
    return (
        <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <h2>Antall bøter:</h2>
            <ul>
                {personer.map((person, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        {person.name}: {person.count} bøter
                        <button
                            onClick={() => onUpdate(person.name, 1)}
                            style={{
                                fontSize: '24px',
                                marginLeft: '10px',
                                marginRight: '5px',
                                cursor: 'pointer',
                                background: 'none',
                                border: 'none',
                                color: 'green'
                            }}
                        >
                            +
                        </button>
                        <button
                            onClick={() => onUpdate(person.name, -1)}
                            style={{
                                fontSize: '24px',
                                marginLeft: '5px',
                                cursor: 'pointer',
                                background: 'none',
                                border: 'none',
                                color: 'red'
                            }}
                        >
                            -
                        </button>
                        <button
                            onClick={() => onRemove(person.name)}
                            style={{
                                fontSize: '24px',
                                marginLeft: '10px',
                                cursor: 'pointer',
                                background: 'none',
                                border: 'none',
                                color: 'black'
                            }}
                        >
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonList;