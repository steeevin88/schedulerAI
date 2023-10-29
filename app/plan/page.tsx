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


        // have actual overlaps
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

        // console.log(merged);

        // need prev end 
        // Find the gaps
        const openSlots: [any, any][] = [];
        let prevEndTime = -1;
        for (const interval of merged){
            if (prevEndTime !== -1 && prevEndTime < interval[0]){
                const temp: [any, any] = [prevEndTime, interval[0]];
                const intervalHour = (new Date(interval[0])).getHours()
                const intervalDay = (new Date(interval[0])).getDate()

                const prevEndTimeHour = (new Date(prevEndTime)).getHours()
                const prevEndTimeDay = (new Date(prevEndTime)).getDate()
                if (prevEndTimeHour >=6 && prevEndTimeHour <= 23 && intervalHour >= 6 && intervalHour <= 23 && prevEndTimeDay == intervalDay){
                    const temp: [any, any] = [prevEndTime, interval[0]]
                    openSlots.push(temp);
                }
            }
            prevEndTime = Math.max(interval[1], prevEndTime);
        }
        for (let i = 0; i < openSlots.length; i++){
            const diff = openSlots[i][1] - openSlots[i][0];
            openSlots[i].push(diff);
        }
        // console.log(openSlots)

        openSlots.sort((a: any, b: any) => {
            return a[2] < b[2] ? 1 : -1;
        });

        // console.log(openSlots)
        console.log(new Date(openSlots[0][0]))
        console.log(new Date(openSlots[0][1]))
        callAI(new Date(openSlots[0][0]), new Date(openSlots[0][1]) )
    }

    function callAI(s: Date, e: Date){
        let start = s.toString().substring(0, 11) + s.toString().substring(16, 21);
        let end = e.toString().substring(0, 11) + e.toString().substring(16, 21);
        


        let input = "My friend and I are free from " + start + " to " + end;
        console.log(input)
    }


  
  

  return (<button onClick={handleClick}>
    Submit
  </button>
  );
};

export default Plan;
