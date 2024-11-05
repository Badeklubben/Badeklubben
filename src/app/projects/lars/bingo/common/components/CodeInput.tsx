import React, { useState, useRef, useEffect } from 'react';

interface CodeInputProps {
    codeLength: number; 
    onCodeChange: (code: string) => void;
    onCodeSubmit: (code: string) => void;
}

const CodeInput: React.FC<CodeInputProps> = ({codeLength, onCodeChange, onCodeSubmit }) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (/^[a-z0-9]?$/.test(value)) {
            const newCode = code.split('');
            newCode[index] = value;
            setCode(newCode.join(''));
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace') {
            inputRefs.current[0]?.focus();
            setCode(prev => '');
        }
        else if (event.key === 'Enter' && code.length == codeLength) {
            onCodeSubmit(code);
            setCode(prev => '');
        }
    };



    useEffect(() => {
        setLoaded(() => true);
    }, []);

    useEffect(() => {
        inputRefs.current[code.length]?.focus();  
        if (code.length == codeLength || code.length == 0){
            onCodeChange(code); 
        }
    }, [code,loaded]);


    return (
        loaded && <div style={{ display: 'flex', gap: '8px' }}>
        {Array.from({ length: codeLength }, (_, index) => (
            <input
            key={index}
            type="text"
            maxLength={1}
            value={code[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => { inputRefs.current[index] = el; }}
            style={{
                width: '40px',
                height: '40px',
                textAlign: 'center',
                fontSize: '24px',
                border: '1px solid #ccc',
                borderRadius: '4px',
            }}
            />
        ))}
        </div>
    );
};

export default CodeInput;