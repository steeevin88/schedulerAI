import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'
 
// POST request to signup a new user
export const POST = async (req) => {
    try {
        const user = cookies().get('username')
        const body = await req.json()
        const {email} = body;

        // check if email is actually registered already
        const emailExists = await prisma.users.findUnique({
            where: {
                email: email
            }
        })
        
        // if email isn't actually registered, return an error msg
        if (emailExists === null) {
            return NextResponse.json({message: "Invalid account; user is not registered.", err});
        }

        const res = await prisma.users.findUnique({
            where: {
                email: user.value
            }, 
            select: {
                friends: true,
            }
        })
        
        // check if user is already friends with user
        if (res.friends && res.friends.includes(email)) {
            return NextResponse.json({message: "Friend has already been added."});
        }
    
        // otherwise, we can add the user
        const userData = await prisma.users.update({ 
            data: {
                friends: {
                    set: [...res.friends, email],
                },
            },
            where: {
                email: user.value,
            },
        })
        console.log('updated user')
        return NextResponse.json({message: "Friend was successfully added. List of friends: " + userData.friends});
    } catch(err) {
        return NextResponse.json({message: "Invalid add.", err});
    }
}