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
        
        const myArray = mySchedule.map(mySchedule =>[mySchedule.start_time, mySchedule.end_time]);
        const friendArray = friendSchedule.map(friendSchedule =>[friendSchedule.start_time, friendSchedule.end_time]);
    }


    function callAI(){
        
    }
      
    function  mergeSchedules(mySchedule, friendSchedule){

    }
  

  return (
  );
};

export default Plan;
