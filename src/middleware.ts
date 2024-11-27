import { type NextRequest, NextResponse } from "next/server";

import { PUBLIC_URL } from "./config/url.config";
import { EnumTokens } from "./services/auth/auth-token.service";

export async function middleware(request: NextRequest) {
    const refresh_token = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

    if (refresh_token === undefined) {
        return NextResponse.redirect(
            new URL(PUBLIC_URL.auth("signIn"), request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [`/cart/:path*`,],
};
