'use client';

import React, { useState } from 'react';

const Steganography: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [password, setPassword] = useState<string>('');
  const [extractedPassword, setExtractedPassword] = useState<string>('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const embedPassword = async () => {
    if (!image || !password) return;

    const img = await loadImage(image);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const newData = embedPasswordInImageData(imgData, password);
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
    if (!image) return;

    const img = await loadImage(image);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (ctx) {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const password = extractPasswordFromImageData(imgData);
      setExtractedPassword(password);
    }
  };

  const loadImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        if (e.target) img.src = e.target.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const embedPasswordInImageData = (imgData: ImageData, password: string): ImageData => {
    const binaryPassword = password.split('').map((char) => char.charCodeAt(0).toString(2).padStart(8, '0')).join('') + '1111111111111110';
    const data = imgData.data;

    for (let i = 0; i < binaryPassword.length; i++) {
      const bit = parseInt(binaryPassword[i], 10);
      data[i * 4] = (data[i * 4] & ~1) | bit; // Modifying only the Red channel
    }

    return imgData;
  };

  const extractPasswordFromImageData = (imgData: ImageData): string => {
    const data = imgData.data;
    let binaryPassword = '';

    for (let i = 0; i < data.length; i += 4) {
      binaryPassword += (data[i] & 1).toString();
      if (binaryPassword.slice(-16) === '1111111111111110') break;
    }

    const binaryChars = binaryPassword.slice(0, -16).match(/.{1,8}/g);
    return binaryChars ? binaryChars.map((b) => String.fromCharCode(parseInt(b, 2))).join('') : '';
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f4f4f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Steganography Tool</h1>
      <div style={{ marginBottom: '15px' }}>
        <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginBottom: '10px' }} />
        {image && <p style={{ fontSize: '14px' }}>{image.name}</p>}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" placeholder="Enter Password" value={password} onChange={handlePasswordChange} style={{ padding: '8px', width: 'calc(100% - 16px)', borderRadius: '4px', border: '1px solid #ccc', marginBottom: '10px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={embedPassword} style={{ padding: '10px 15px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Embed Password</button>
        <button onClick={extractPassword} style={{ padding: '10px 15px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Extract Password</button>
      </div>
      {extractedPassword && <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>Extracted Password: {extractedPassword}</p>}
    </div>
  );
};

export default Steganography;
