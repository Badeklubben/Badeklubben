
import QRCode from "qrcode";

// Validate if the current time is between 10:00 and 10:15
export const isWithinValidTimeFrame = (): boolean => {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  start.setHours(10, 0, 0);  // 10:00
  end.setHours(10, 15, 0);   // 10:15

  return now >= start && now <= end;
};

// Generate a QR code with a given URL
export const generateQRCode = async (url: string): Promise<string> => {
  try {
    const qrCode = await QRCode.toDataURL(url);
    return qrCode;
  } catch (error) {
    throw new Error("Failed to generate QR code");
  }
};
