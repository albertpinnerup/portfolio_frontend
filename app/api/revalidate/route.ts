import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => null);

        const secret = req.nextUrl.searchParams.get('secret');
        if (secret !== process.env.REVALIDATE_SECRET) {
            return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
        }

        // Revalidate entire site (or specify paths)
        try {
            revalidateTag('strapi');
            return NextResponse.json({ revalidated: true, now: Date.now(), body }, { status: 200 });
        } catch (err) {
            return NextResponse.json(
                { message: 'Error revalidating', error: String(err) },
                { status: 500 }
            );
        }
    } catch {
        return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
    }
}
