
import QRCode from "qrcode";

export const isWithinValidTimeFrame = (): boolean => {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  start.setHours(10, 0, 0);  // 10:00
  end.setHours(18, 15, 0);   // 10:15

  return now >= start && now <= end;
};

export const generateQRCode = async (url: string): Promise<string> => {
  try {
    const qrCode = await QRCode.toDataURL(url);
    return qrCode;
  } catch (error) {
    throw new Error("Failed to generate QR code");
  }
};
