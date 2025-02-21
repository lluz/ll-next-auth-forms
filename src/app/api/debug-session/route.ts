import { auth } from "@/lib/auth2";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  console.log("Session from auth.api.getSession():", session);

  return NextResponse.json({ session });
}