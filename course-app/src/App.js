import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "./wit_crest.png"

const App = () => {
   // Substitute your module names here.
   const modules = [
    {
        name: "Web Dev 2",
        noLectures: 1,
        noPracticals: 2
    },
    {
        name: "NoSQL Databases",
        noLectures: 2,
        noPracticals: 3
    },
      {
        name: "Network Forensics",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "DevOps",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "Legal Principles of Computer Forensics",
        noLectures: 2,
        noPracticals: 3
    }
   ];
  const name = "Computer Forensics and Security " // Substitute

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App