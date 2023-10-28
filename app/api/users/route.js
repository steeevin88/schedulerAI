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
        const email = req.headers.get("email");
        const pass = req.headers.get("password");
        const users = await prisma.user.findUnique({
            where: {
                email: email,
              },
        })
        if (pass === users.password) {
            const response = NextResponse.redirect(new URL('/', req.nextUrl))
            response.cookies.set('username', email)
            return response;
        } else {
            return NextResponse.json({message: "GET ERROR", err})
        }
    } catch(err) {
        return NextResponse.json({message: "GET ERROR", err})
    }
}

/*
export const DELETE = async (req) => {
    try {
        const body = await req.json();
        const {email} = body;
        const users = await prisma.user.delete({
            where: {
              email: `${email}`,
            },
            select: {
                email: true,
                name: true,
            }
        })
        return NextResponse.json(users);
    } catch(err) {
        return NextResponse.json({message: "DELETE ERROR", err})
    }
}
*/