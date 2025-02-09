import dbConnect from "@/lib/db";
import { Event } from "@/lib/models/Event";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const start = Number(request.nextUrl.searchParams.get("start"));
    const end = Number(request.nextUrl.searchParams.get("end"));

    const startDate = new Date(Date.UTC(start, 0, 1));
    const endDate = new Date(Date.UTC(end + 1, 0, 1));

    console.log("Start Date:", startDate); // Debugging
    console.log("End Date:", endDate); // Debugging

    const eventDetails = await Event.find({
      dt: {
        $gte: startDate,
        $lt: endDate,
      },
    })
      .sort({ dt: -1 })
      .exec();
    return NextResponse.json(
      { success: true, data: eventDetails },
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
