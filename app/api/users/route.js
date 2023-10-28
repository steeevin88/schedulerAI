import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';
 
export const POST = async (req) => {
    try {
        const body = await req.json();
        const {email, name, password, preferences} = body;
        
        const newUser = await prisma.user.create({ 
            data: {
                email,
                name,
                password,
                preferences
            }
        })

        return NextResponse.json(newUser);
    } catch(err) {
        return NextResponse.json({message: "POST ERROR", err});
    }
}

export const GET = async (req) => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch(err) {
        return NextResponse.json({message: "GET ERROR", err})
    }
}