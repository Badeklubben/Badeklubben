import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const runtime = 'edge';
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const directory = "src/app/projects/" + searchParams.get('id') || "";

  const directoryPath = path.join(process.cwd(), directory);

  try {
    const items = fs.readdirSync(directoryPath);
    const projects = items.filter((item) => {
      const itemPath = path.join(directoryPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read directory' },
      { status: 500 }
    );
  }
}