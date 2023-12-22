// Main page hosting the calendar view
"use client";

import { useEffect, useState } from 'react'

const page = () => {
  const [calEvents, setCalEvents] = useState<Event[] | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const loadCalendar = async () => {
      const myReq = new Request(`/api/calendar`, {
        method: "GET",
        headers: {
          "email": `${username}`
        }
      });
      const response = await fetch(myReq);
      setCalEvents(await response.json());
    };

    // Delay function to mimic setTimeout
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Access document.cookie inside useEffect to ensure it runs client-side
    const usernameCookie = document.cookie.match('(^|;)\\s?username\\s?=\\s?([^;]+)');
    const usernameFromCookie = usernameCookie ? usernameCookie[2] : null;
    setUsername(usernameFromCookie);

    // Redirect if no username
    if (!usernameFromCookie) {
      window.location.href = "../login";
    }

    // Load calendar events only when username is available
    if (!calEvents && usernameFromCookie) {
      // Delay loading calendar by 1 second
      delay(1000).then(() => {
        loadCalendar();
      });
    }
  }, [calEvents, username]);

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

export default page;