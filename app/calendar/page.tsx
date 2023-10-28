'use client'
import React, { ChangeEvent, useState } from 'react';

//Integrate email in this page!!!!!

const FileUpload: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>(''); // State to store file content
  const [jsonData, setJsonData] = useState<any>(null); // State to store parsed JSON data

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
      console.log(newArray.length)
      while (index < newArray.length){
        const dtstart = newArray[index].match(pattern);
        index++;
        const dtend = newArray[index].match(pattern);
        index++;
        const name = newArray[index];
        index++;
        const event = {
          dtstart,
          dtend,
          name
        };
        // console.log(event);
        events.push(event);
        
      }
      // console.log("Events")
      // console.log(events);
      const eventsJSON = JSON.stringify(events);
      console.log("EventsJSON")
      console.log(eventsJSON);      
      
    };

    // Read the file as text
    reader.readAsText(file);
  };

  return (
    <div>
      <h1>Upload File and Convert to JSON</h1>
      <input type="file" onChange={handleFileUpload} />
      <div>
        <h2>File Content:</h2>
        <pre>{fileContent}</pre>
        <h2>Parsed JSON Data:</h2>
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default FileUpload;
