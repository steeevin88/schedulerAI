'use client'
import React, { ChangeEvent, useState } from 'react';

//Integrate email in this page!!!!!

const FileUpload: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>(''); // State to store file content
  const [jsonData, setJsonData] = useState<any>(null); // State to store parsed JSON data

  function parseDateString(dateString: string): Date {
    const year: number = parseInt(dateString.substr(0, 4), 10);
    const month: number = parseInt(dateString.substr(4, 2), 10) - 1; // Month in JavaScript Date object is 0-indexed
    const day: number = parseInt(dateString.substr(6, 2), 10);
    const hours: number = parseInt(dateString.substr(9, 2), 10);
    const minutes: number = parseInt(dateString.substr(11, 2), 10);
    const seconds: number = parseInt(dateString.substr(13, 2), 10);
  
    return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
  }
  

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const fileContentString = reader.result as string;
      setFileContent(fileContentString); // Set file content in state
      // console.log(fileContentString);
      const lines = fileContentString.split('\n');
      // console.log(lines);
      const filteredArray = lines.filter(line=>{
        return line.includes("DTSTART") || line.includes("DTEND") || line.includes("SUMMARY");
      });
      
      const newArray = filteredArray.splice(2);
      let index = 0;
      let events = [];
      const pattern = /\b\d{8}T\d{6}Z\b/;
      // for (let i = 0; i < newArray.length; i++){
      //   console.log(newArray[i]);
      // }
      // console.log(newArray.length)
      while (index < newArray.length){
        const start_time_regex = newArray[index].match(pattern);
        let start_time;
        if (start_time_regex){
          start_time = parseDateString(start_time_regex.join(''))
        }
        index++;

        let end_time;
        const end_time_regex = newArray[index].match(pattern);
        if (end_time_regex){
          end_time = parseDateString(end_time_regex.join(''))
        }

        index++;
        const event_name = newArray[index].substring(7, newArray[index].length - 1);
        index++;
        const email = "johndoe@gmail.com"
        const event = {
          email,
          start_time,
          end_time,
          event_name
        };

        if (start_time){
          const month = start_time.getMonth();
          const year =  start_time.getFullYear();
          if (year >= 2024 || (year === 2023 && month >= 9)){
            events.push(event);
          }
        }
        
      }
      // console.log("Events")
      // console.log(events);
      // const eventsJSON = JSON.stringify(events);
      // console.log("EventsJSON")
      console.log("Before request");   
      for (let i = 0; i < events.length; i++){
        // console.log(events[i]);
        const eventJSON = JSON.stringify(events[i]);
        console.log(eventJSON);
        const request = new Request(`../api/calendar`, {
          method: "Post",
          body: eventJSON,
        });
        fetch(request)
      }   
      

    };

    // Read the file as text
    reader.readAsText(file);

    setTimeout(() => {window.location.href = '../../'}, 1000);
  };

  return (
    <div className='flex rounded-xl align-middle justify-center m-[10%] p-10 bg-blue-200 flex-col flex-grow'>
      <h1>Upload File and Convert to JSON</h1>
      <input type="file" onChange={handleFileUpload} />
      <div>
      </div>
    </div>
  );
};

export default FileUpload;
