
import { NextRequest, NextResponse } from 'next/server';
import { generateDailyQrCode, isWithinValidTimeFrame } from '../../../projects/gard/qr_fingerprint/utils/qr';

// Named export for POST method
export async function POST(req: NextRequest) {
  const { qrCode, fingerprint } = await req.json();

  // Generate today's valid code
  const validCode = generateDailyQrCode();

  // Check if within the allowed time window
  if (!isWithinValidTimeFrame()) {
    return NextResponse.json({ success: false, message: "Outside of allowed timeframe" }, { status: 403 });
  }

  // Validate QR code
  if (qrCode === validCode) {
    // Optionally validate fingerprint here
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: "Invalid QR code" }, { status: 403 });
  }
}
