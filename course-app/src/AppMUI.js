import React from "react";
import Course from "./components/courseMUI";
import witCrest from "./wit_crest.png";
import Box from "@mui/material/Box";

const styles = {
    appHeader: {
      backgroundColor: "yellow",
      height: "200px",
      padding: "10px",
      color: "white",
    },
    course: {
      padding: "10px",
    },
  };
  
  const App = () => {

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
    },
   ];

  const name = "Computer Forensics and Security "; // Substitute


  return (
    <>
      <header style={styles.appHeader}>
        <img src={witCrest} alt="logo" />
      </header>
      <Box sx={styles.course}>
        <Course title={name} modules={modules} />
      </Box>
    </>
  );
};
export default App;