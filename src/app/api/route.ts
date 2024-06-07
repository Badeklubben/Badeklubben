import getSubRoutes from "@/common/routeManager";

import { NextResponse,NextRequest } from "next/server";

export const runtime = 'nodejs';
export async function GET(req:NextRequest) {

    const baseRoute = req.nextUrl.searchParams.get('baseRoute') as string;
    const subRoutes = await getSubRoutes(baseRoute || '');

    return NextResponse.json(subRoutes, { status: 200 });
}
