import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';

// GET request to get all events tied to a user
export const GET = async (req) => {
    try {
        const email = req.headers.get("email");
        const users = await prisma.event.findMany({
            where: {
                email: email,
              },
        })
        return NextResponse.json(users);
    } catch(err) {
        return NextResponse.json({message: "GET ERROR", err})
    }
}