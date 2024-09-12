import React, { useState } from 'react';

interface AddPersonFormProps {
    onAddPerson: (name: string) => void;
}

const AddPersonForm: React.FC<AddPersonFormProps> = ({ onAddPerson }) => {
    const [newPersonName, setNewPersonName] = useState<string>('');

    const handleAddPerson = () => {
        onAddPerson(newPersonName);
        setNewPersonName('');
    };

    return (
        <div style={{ marginLeft: "10px", marginTop: "20px" }}>
            <h2>Legg til ny person:</h2>
            <input
                type="text"
                value={newPersonName}
                onChange={(e) => setNewPersonName(e.target.value)}
                placeholder="Skriv inn navn"
                style={{ marginRight: '10px' }}
            />
            <button onClick={handleAddPerson} style={{ cursor: 'pointer' }}>
                Legg til
            </button>
        </div>
    );
};

export default AddPersonForm;