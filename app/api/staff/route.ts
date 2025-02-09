import dbConnect from "@/lib/db";
import { Staff } from "@/lib/models/Staff";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const staffDetails = await Staff.find();
    return NextResponse.json(
      { success: true, data: staffDetails },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
