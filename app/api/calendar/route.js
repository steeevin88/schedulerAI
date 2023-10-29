import prisma from '../../libs/prisma';
import { NextResponse } from 'next/server';

// export const POST = async (req) => {
//     try {
//       const events = await req.json();
//         for (const event of events){
//             const createdEvent = await prisma.event.create({
//                 data: {
//                     email: event.email,
//                     event_name: event.event_name,
//                     start_time: event.start_time,
//                     end_time: event.end_time,
//                 },
//             });
//             console.log('Event created:', createdEvent);
//         }
//     } catch(err) {
//         return NextResponse.json({message: "POST ERROR", err});
//     }
// }
export const POST = async (req) => {
  try {
    const event = await req.json();
      const createdEvent = await prisma.event.create({
          data: {
              email: event.email,
              event_name: event.event_name,
              start_time: event.start_time,
              end_time: event.end_time,
          },
      });

      console.log('Event created:', createdEvent);
       return NextResponse.json({message: "SUCCESS!"})
  } catch(err) {
      return NextResponse.json({message: "POST ERROR", err});
  }
}



export const GET = async (req) => {
  try{
  const email = req.headers.get("email") 
  const events = await prisma.event.findMany({
    where: {
      email: email
    },
  })
  return NextResponse.json(events)
} catch (err){
  return NextResponse.json({message: "GET ERROR", err});
}
}

export const DELETE = async () => {
      try {
          // const body = await req.json();
          // const {email} = body;
          const events = await prisma.event.deleteMany({})
          console.log(events)
          return NextResponse.json(events);
      } catch(err) {
          return NextResponse.json({message: "DELETE ERROR", err})
      }
  }