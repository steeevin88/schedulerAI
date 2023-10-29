'use client'
import React from 'react';
const axios = require('axios')

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

    async function callAI(s: Date, e: Date){
        let start = s.toString().substring(0, 11) + s.toString().substring(16, 21);
        let end = e.toString().substring(0, 11) + e.toString().substring(16, 21);
        


        let input = "My friend and I are free from " + start + " to " + end + ". My preferences are " + "football,hiking,grilling,dining,poetry" + " and my friend's preferences are" + "basketball,nature,tacos,concerts,sculpting" + "Plan an activity for us and return your output in a json format\nexample:\n{\n    title:\n    description:\n}";

        
        // const res = axios.post('https://api.together.xyz/inference', {
        // "model": "OpenAssistant/llama2-70b-oasst-sft-v10",
        // "max_tokens": 512,
        // "prompt": input,
        // "request_type": "language-model-inference",
        // "temperature": 0.7,
        // "top_p": 0.7,
        // "top_k": 50,
        // "repetition_penalty": 1,
        // "stream_tokens": true,
        // "stop": [
        //     "</s>",
        //     "<|im_end|>"
        // ],
        // "negative_prompt": "",
        // "sessionKey": "c1bb40ca5ee41dc7ac4d7d9cdcbe0146f319d0f1",
        // "safety_model": "",
        // "repetitive_penalty": 1,
        // "update_at": "2023-10-29T15:31:55.697Z"
        // }, {
        // headers: {
        //     Authorization: 'Bearer 9a9e17d3157cf91de4529c6902d8bb205ffd8c93f81afb03e86434ad183bfeb6'
        // }    
        // }).then((response) => {
        // console.log(response);
        // }, (error) => {
        // console.log(error);
        // });

        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer 9a9e17d3157cf91de4529c6902d8bb205ffd8c93f81afb03e86434ad183bfeb6'
            },
            body: JSON.stringify({
              model: 'OpenAssistant/llama2-70b-oasst-sft-v10',
              prompt: input,
              max_tokens: 128,
              stop: '.',
              temperature: 0,
              top_p: 0.7,
              top_k: 50,
              repetition_penalty: 1,
              seed: 0
            })
          };
          
          const ans = await fetch('https://api.together.xyz/inference', options)
            // .then(response => response.json())
            // .then(response => console.log(response["output"]["choices"][0].text))
            // .catch(err => console.error(err));

        const res = await ans.json()
        const output = res.output.choices[0].text.trim().split(/\r?\n/);
       
        const titleString = output[2].trim()
        const title = titleString.substring(10, titleString.length - 2);

        const descriptionString = output[3].trim()
        const description = descriptionString.substring(16, descriptionString.length - 1);

        console.log(description) 
        // console.log(ans.output.choices[0].text);
    }


  
  

  return (<button onClick={handleClick}>
    Submit
  </button>
  );
};

export default Plan;
