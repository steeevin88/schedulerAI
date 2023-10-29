'use server'
 
import { cookies } from 'next/headers'
import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';
 
// GET request to log a registered user in
export const GET = async (req) => {
    try {
        const email = req.headers.get("email");
        const user = await prisma.user.findUnique({
            where: {
                email: email,
              },
        })
        if (user === null) {
            return NextResponse.json({message: "User does not exist...", link: "../../signup"})
        }

        return NextResponse.json({message: user.preferences});
    } catch(err) {
        return NextResponse.json({message: "GET ERROR", err});
    }
}
