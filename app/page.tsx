// Main page hosting the calendar view
"use client";

import { useState } from 'react'

const page = () => {
  const [calEvents, setCalEvents] = useState(null);
  const usernameCookie = document.cookie.match('(^|;)\\s?username\\s?=\\s?([^;]+)');
  const username = usernameCookie ? usernameCookie[2] : null;

  const myReq = new Request(`/api/calendar`, {
    method: "GET",
    headers: {
      "email": `${username}`
    }
  });

  async function loadCalendar() {
    if (calEvents) {return;}
    const response = await fetch(myReq);
    setCalEvents(await response.json());
    console.log(calEvents);
  }
  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  delay(1000).then(() => {
    loadCalendar();
  });


  /*
  email
: 
"johndoe@gmail.com"
end_time
: 
"2023-10-13T04:30:00.000Z"
event_name
: 
":Grind + Dinner"
id
: 
1
start_time
: 
"2023-10-13T02:30:00.000Z
   */

  type Event = {email: string, end_time: string, event_name: string, id: number, start_time: string}

  function formatTime(time: string) {
    let indT = time.indexOf('T');
    let indDot = time.indexOf('.');
    let date = time.substring(0, indT);
    let hour = time.substring(time.indexOf('T')+1, indDot-3);
    return `${date}\n${hour}`
  }

  return (
    <div className='flex flex-row flex-wrap'>
        {calEvents && calEvents.map((event: Event) => {
            return (
                <div className="rounded-xl bg-blue-200 p-10 m-5 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-lato">{event.event_name[0] == ':' ? event.event_name.substring(1) : event.event_name}</h1>
                    <h2 className="text-2xl font-lato">{formatTime(event.start_time)}</h2>
                    <h2 className="text-2xl font-lato">{formatTime(event.end_time)}</h2>
                </div>
            );
          })
        }
    </div>
  )
}

export default page