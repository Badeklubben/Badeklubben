// components/MyInput.tsx
import React from 'react';
import TextField from '@mui/material/TextField';

interface MyInputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({ label, value, onChange }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
        />
    );
};

export default MyInput;
