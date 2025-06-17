import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    frontendImage: process.env.NEXT_PUBLIC_FRONTEND_IMAGE || "",
    backendImage: process.env.NEXT_PUBLIC_BACKEND_IMAGE || "",
  });
}
