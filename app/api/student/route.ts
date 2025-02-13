import dbConnect from "@/lib/db";
import { Student } from "@/lib/models/Student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const start = Number(request.nextUrl.searchParams.get("start"));
    const end = Number(request.nextUrl.searchParams.get("end"));
    const studentDetails = await Student.find({
      st_yr: {
        $lte: start,
      },
      end_yr: {
        $gte: end,
      },
    })
      .sort({ name: 1 })
      .exec();
    return NextResponse.json(
      { success: true, data: studentDetails },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
