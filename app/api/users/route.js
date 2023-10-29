import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';
 
// POST request to signup a new user
export const POST = async (req) => {
    try {
        const body = await req.json();
        const {email, icsUrl, password, preferences} = body;

        console.log("got body")
        // check if email is already registered
        const userExists = await prisma.user.findUnique({
            where: {
                email: email,
              },
        })
        console.log(userExists)
        if (userExists) {
            console.log('in userExists')
            return NextResponse.json({message: "An account with that user already exists", link: "../../login"});
        }
        
        console.log('creating user')
        const newUser = await prisma.user.create({ 
            data: {
                email,
                icsUrl,
                password,
                preferences
            }
        })
        console.log('created user')
        const response = NextResponse.next();
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
        const user = await prisma.user.findUnique({
            where: {
                email: email,
              },
        })
        if (user === null) {
            return NextResponse.json({message: "User does not exist", link: "../../signup"})
        }

        if (pass === user.password) {
            const response = NextResponse.next();
            response.cookies.set('username', email)
            return response;
        } else {
            return NextResponse.json({message: "Invalid username / password."});
        }
    } catch(err) {
        return NextResponse.json({message: "GET ERROR", err});
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