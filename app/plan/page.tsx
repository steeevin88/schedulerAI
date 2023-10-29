'use client'
import React from 'react';

//Integrate own email
//Need to

const Plan: React.FC = () => {

    const handleClick = (e) => {
        e.preventDefault;
        union("johnsmith@gmail.com", "kellysmith@gmail.com");
        

    }
  
    async function union(myEmail: string, friendEmail: string) {
        
        const myRequest = new Request(`../api/plan`, {
            method: "GET",
            headers: {
                email: myEmail,
            },
          });
          
        const mySchedule = await fetch(myRequest).then(response => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json(); 
        })
        // console.log("MySchedule")
        // console.log(mySchedule)

        const friendRequest = new Request(`../api/plan`, {
            method: "GET",
            headers: {
                email: friendEmail,
            },
          });
          
          const friendSchedule = await fetch(friendRequest).then(response => {
            if (!response.ok) {
            throw new Error("Network response was not ok");
            }
            return response.json(); 
        })
        
        const myArray: [any, any][] = []
        // mySchedule.map(mySchedule => [mySchedule.start_time, mySchedule.end_time])
        for (let i = 0; i < mySchedule.length; i++){
            const temp: [any, any] = [new Date(mySchedule[i].start_time).getTime(), new Date(mySchedule[i].end_time).getTime()]
            myArray.push(temp)
            // if (myArray[i][1]) {
            //     myArray.pop();
            // }
        }

        for (let i = 0; i < mySchedule.length; i++){
            
        }
        // console.log(myArray)

        const friendArray: [any, any][] = []
        for (let i = 0; i < friendSchedule.length; i++){
            const temp: [any, any] = [new Date(friendSchedule[i].start_time).getTime(), new Date(friendSchedule[i].end_time).getTime()]
            friendArray.push(temp)
            // if (isNaN(friendArray[i][1])){
            //     friendArray.pop();
            // }
        }
        // console.log(friendArray);



        // const friendArray = friendSchedule.map(friendSchedule => [friendSchedule.start_time, friendSchedule.end_time])
        // Merge the meetings
        // const myArray: [Date, Date][] = [];
        // for (let i = 0; i < mySchedule.length; i++){
        //     const startTime = new Date(mySchedule[i].start_time)
        //     const endTime = new Date(mySchedule[i].end_time)
        //     console.log(endTime);
        //     const temp: [Date, Date] = [startTime, endTime]
        //     console.log(temp)
        //     myArray.push(temp)
        // }

        // const myArray = mySchedule.map(mySchedule =>[new Date(mySchedule.start_time), new Date(mySchedule.end_time)]);
        
        // const friendArray = friendSchedule.map(friendSchedule =>[new Date(friendSchedule.start_time), new Date(friendSchedule.end_time)]);
    
        const sorted = myArray.concat(friendArray);
        // console.log(sorted);

        

        sorted.sort((a: any, b: any) => {
            return a[0] > b[0] ? 1 : -1;
        });


        const merged: [any, any][] = [sorted[0]];

        for (let i = 1; i < sorted.length; i++){
            let currentMeeting = sorted[i];
            let lastMergedMeeting = merged[merged.length - 1];
            if (currentMeeting[0] <= lastMergedMeeting[1]){
                lastMergedMeeting[1] = Math.max(lastMergedMeeting[1], currentMeeting[1]);

            } else {
                // console.log(currentMeeting);
                merged.push(currentMeeting);
            }
        }

        console.log(merged);

        // Find the gaps
        const openSlots: [any, any][] = [];
        let prevEndTime = -1 ;
        for (const interval of merged){
            if (prevEndTime !== null && prevEndTime < interval[0]){
                const temp: [any, any] = [prevEndTime, interval[0]];
                openSlots.push(temp);
            }
            prevEndTime = Math.max(interval[1], prevEndTime);
        }

        console.log(openSlots)

    }




  
  

  return (<button onClick={handleClick}>
    Submit
  </button>
  );
};

export default Plan;
