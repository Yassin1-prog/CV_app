/*import { useState } from "react";*/
import "./App.css";
import PersonalData from "./components/personalData.jsx";
import EducationInfo from "./components/educationInfo.jsx";
import WorkExperience from "./components/workExperience.jsx";
import Skills from "./components/skills.jsx";

function App() {
  /*const [count, setCount] = useState(0);*/

  return (
    <>
      <h1>CV MAKER</h1>
      <PersonalData />
      <EducationInfo />
      <WorkExperience />
      <Skills />
    </>
  );
}

export default App;
