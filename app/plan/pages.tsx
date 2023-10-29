'use client'
import React from 'react';

//Integrate own email
//Need to

const Plan: React.FC = () => {
  
    function union(myEmail: string, friendEmail: string) {
        
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
        

        // Merge the meetings
        const myArray = mySchedule.map(mySchedule =>[new Date(mySchedule.start_time), new Date(mySchedule.end_time)]);
        const friendArray = friendSchedule.map(friendSchedule =>[new Date(friendSchedule.start_time), new Date(friendSchedule.end_time)]);
        const concatArray = myArray.concat(friendArray);
        concatArray.sort((a: any, b: any) => {
            return new Date(a[0]).getTime() - new Date(b[0]).getTime() ? 1 : -1;
        });

        const merged: [any, any][] = [concatArray[0]];

        for (let i = 1; i < concatArray.length; i++){
            let currentMeeting = concatArray[i];
            let lastMergedMeeting = merged[merged.length - 1];
            if (currentMeeting[0] <= lastMergedMeeting[1]){
                lastMergedMeeting[1] = Math.max(lastMergedMeeting[1], currentMeeting[1]);

            } else {
                merged.push(currentMeeting);
            }
        }

        // Find the gaps
        const openSlots: [any, any][] = [];
        let prevEndTime: number | null = null;
        for (const interval of merged){
            if (prevEndTime !== null && prevEndTime < interval[0]){
                const temp: [any, any] = [prevEndTime, interval[0]];
                openSlots.push(temp);
            }
            prevEndTime = Math.max(interval[1], prevEndTime);
        }

    }




    function callAI(){
        
    }
    
  

  return (
  );
};

export default Plan;
