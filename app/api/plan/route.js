import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    try {
        const email = req.headers.get("email");
        const schedules = await prisma.events.findMany({
            where: {
                email: email,
              },
              select: {
                start_time: true,
                end_time: true
              },
        });
        const scheduleTimes = schedules.map((schedule) => ({
            start_time: schedule.start_time, // Convert to ISO String if necessary
            end_time: schedule.end_time,     // Convert to ISO String if necessary
          }));
          console.log(scheduleTimes)
        return NextResponse.json(scheduleTimes);
    } catch(err) {
        return NextResponse.json({message: "GET ERROR", err})
    }

}