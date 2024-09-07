'use client';

import React, { useState } from 'react';
import { loadImage, embedPasswordInImageData, extractPasswordFromImageData } from './stegno_logic';
import styles from './stegnography.module.css';

const SteganographyForm: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [password, setPassword] = useState<string>('');
    const [securityPassword, setSecurityPassword] = useState<string>('');
    const [enteredSecurityPassword, setEnteredSecurityPassword] = useState<string>('');
    const [extractedPassword, setExtractedPassword] = useState<string>('');
    const [showTooltip, setShowTooltip] = useState(false); // Tooltip state

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSecurityPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecurityPassword(event.target.value);
    };

    const handleEnteredSecurityPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredSecurityPassword(event.target.value);
    };

    const embedPassword = async () => {
        if (!image || !password || !securityPassword) return;

        const img = await loadImage(image);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const newData = embedPasswordInImageData(imgData, password, securityPassword);
            ctx.putImageData(newData, 0, 0);

            canvas.toBlob((blob) => {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'encoded_image.png';
                    a.click();
                }
            }, 'image/png');
        }
    };

    const extractPassword = async () => {
        if (!image || !enteredSecurityPassword) return;

        const img = await loadImage(image);
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const password = extractPasswordFromImageData(imgData, enteredSecurityPassword);
            if (password) {
                setExtractedPassword(password);
            } else {
                alert('Incorrect security password.');
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Steganography Tool</h1>
            <div className={styles.fileInput}>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {image && <p className={styles.fileName}>{image.name}</p>}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className={styles.inputField}
                />
            </div>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="Enter Security Password"
                    value={securityPassword}
                    onChange={handleSecurityPasswordChange}
                    className={styles.inputFieldWithIcon}  /* Change to a new class for styling */
                />
                <span
                    className={styles.infoIconInside}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
    ?
  </span>
                {showTooltip && <div className={styles.tooltip}>This password will be required to extract the hidden
                    password.</div>}
            </div>
            <div>
                <button onClick={embedPassword} className={styles.button}>Embed Password</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Enter Security Password to Extract"
                    value={enteredSecurityPassword}
                    onChange={handleEnteredSecurityPasswordChange}
                    className={styles.inputField}
                />
            </div>
            <div>
                <button onClick={extractPassword} className={styles.extractButton}>Extract Password</button>
            </div>
            {extractedPassword && <p className={styles.extractedPassword}>Extracted Password: {extractedPassword}</p>}
        </div>
    );
};

export default SteganographyForm;
