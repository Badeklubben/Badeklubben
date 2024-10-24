export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { generateQRCode, isWithinValidTimeFrame } from '../../projects/gard/qr_fingerprint/utils/qr';

export async function GET(req: NextRequest) {
  try {
    if (!isWithinValidTimeFrame()) {
      return NextResponse.json(
        { error: "QR code generation is only allowed between 10:00 and 10:15." },
        { status: 403 }
      );
    }

    const host = req.headers.get('host');

    // Determine the protocol (http for development, https for production)
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    // Build the base URL using the dynamic host and protocol
    const baseUrl = `${protocol}://${host}`;

    // Construct the full URL for the QR code registration page
    const qrCodeUrl = `${baseUrl}/projects/gard/qr_fingerprint/register`;

    // Generate the QR code with the dynamically built URL
    const qrCode = await generateQRCode(qrCodeUrl);

    return NextResponse.json({ qrCode });
  } catch (error) {
    console.error("Failed to generate QR code:", error);
    return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
  }
}
