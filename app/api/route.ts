import { NextResponse } from "next/server";

export async function GET() {
  const results = {
    message: "hello world",
  };

  return NextResponse.json(results);
}
