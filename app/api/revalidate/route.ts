import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const secret = req.nextUrl.searchParams.get('secret');
        if (secret !== process.env.REVALIDATE_SECRET) {
            return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
        }

        // Revalidate entire site (or specify paths)
        revalidateTag('strapi');

        return NextResponse.json({ revalidated: true });
    } catch {
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
