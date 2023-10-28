import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';
 
// POST request to signup a new user
export const POST = async (req) => {
    try {
        const body = await req.json();
        const {email, name, password, preferences} = body;

        // check if email is already registered
        const userExists = await prisma.user.findUnique({
            where: {
                email: email,
              },
        })
        if (userExists !== null) {
            return NextResponse.json({message: "An account with that user already exists"})
        }
        
        const newUser = await prisma.user.create({ 
            data: {
                email,
                name,
                password,
                preferences
            }
        })
        const response = NextResponse.redirect(new URL('/', req.nextUrl))
        response.cookies.set('username', email)
        return response;
    } catch(err) {
        return NextResponse.json({message: "POST ERROR", err});
    }
}

// GET request to log a registered user in
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
            return NextResponse.json(users)
        } else {
            return NextResponse.json({message: "Invalid username/ password.", err})
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