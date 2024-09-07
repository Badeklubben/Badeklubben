export const loadImage = (file: File): Promise<HTMLImageElement> => {
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

export const embedPasswordInImageData = (imgData: ImageData, password: string, securityPassword: string): ImageData => {
    const combinedPassword = securityPassword + ':' + password;
    const binaryPassword = combinedPassword.split('').map((char) => char.charCodeAt(0).toString(2).padStart(8, '0')).join('') + '1111111111111110';
    const data = imgData.data;

    for (let i = 0; i < binaryPassword.length; i++) {
        const bit = parseInt(binaryPassword[i], 10);
        data[i * 4] = (data[i * 4] & ~1) | bit; // Modifying only the Red channel
    }

    return imgData;
};

export const extractPasswordFromImageData = (imgData: ImageData, enteredSecurityPassword: string): string | null => {
    const data = imgData.data;
    let binaryPassword = '';

    for (let i = 0; i < data.length; i += 4) {
        binaryPassword += (data[i] & 1).toString();
        if (binaryPassword.slice(-16) === '1111111111111110') break;
    }

    const binaryChars = binaryPassword.slice(0, -16).match(/.{1,8}/g);
    const combinedPassword = binaryChars ? binaryChars.map((b) => String.fromCharCode(parseInt(b, 2))).join('') : '';
    const [storedSecurityPassword, actualPassword] = combinedPassword.split(':');

    // Validate the entered security password
    if (storedSecurityPassword === enteredSecurityPassword) {
        return actualPassword;
    } else {
        return null;
    }
};
