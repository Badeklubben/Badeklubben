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


async function hashPassword(password: string): Promise<Uint8Array> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return new Uint8Array(hashBuffer);
}


function xorEnc(payload: string, key: Uint8Array): string {
  
  const payloadBinary = payload.split('').map((char => char.charCodeAt(0)));
  const encryptedPayload = payloadBinary.map((charcode, i) => charcode ^ key[i % key.length]);
  return encryptedPayload.map(byte => String.fromCharCode(byte)).join('');
}




export async function embedPasswordInImageData(
  imgData: ImageData, 
  payload: string, 
  securityPassword: string
): Promise<ImageData> {
  const hashedPassword = await hashPassword(securityPassword);
  const encryptedPayload = xorEnc(payload, hashedPassword);
  
  const binaryPayload = encryptedPayload
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('') + '1111111111111110'; 
  
  const data = imgData.data;
  
  for (let i = 0; i < binaryPayload.length; i++) {
    const bit = parseInt(binaryPayload[i], 10);
    data[i * 4] = (data[i * 4] & ~1) | bit; 
  }
  
  return imgData;
}

export async function extractPasswordFromImageData(
  imgData: ImageData, 
  securityPassword: string
): Promise<string | null> {
  const hashedPassword = await hashPassword(securityPassword);
  
  const data = imgData.data;
  let binaryPayload = '';
  
  for (let i = 0; i < data.length; i += 4) {
    binaryPayload += (data[i] & 1).toString();
    if (binaryPayload.slice(-16) === '1111111111111110') break; 
  }
  
  const binaryChars = binaryPayload.slice(0, -16).match(/.{1,8}/g);
  if (!binaryChars) return null;
  
  const encryptedPayload = binaryChars.map(b => String.fromCharCode(parseInt(b, 2))).join('');
  
  const decryptedPayload = xorEnc(encryptedPayload, hashedPassword);
  
  return decryptedPayload;
}
