import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import PersonalData from "./components/personalData.jsx";
import EducationInfo from "./components/educationInfo.jsx";
import WorkExperience from "./components/workExperience.jsx";
import Skills from "./components/skills.jsx";
import Resume from "./components/resume.jsx";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  about: "",
};

function App() {
  const [data, setData] = useState(initialData);
  const [school, setSchool] = useState([]);
  const [work, setWork] = useState([]);
  const [skill, setSkill] = useState([]);

  const addSkill = () => {
    setSkill([...skill, { id: uuidv4(), skills: "" }]);
  };

  const removeSkill = (id) => {
    setSkill(skill.filter((item) => item.id !== id));
  };

  const handleInputChangeS = (id, field, value) => {
    const updatedData = skill.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSkill(updatedData);
  };

  const addWork = () => {
    setWork([
      ...work,
      {
        id: uuidv4(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeWork = (id) => {
    setWork(work.filter((item) => item.id !== id));
  };

  const handleInputChangeWork = (id, field, value) => {
    const updatedData = work.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setWork(updatedData);
  };

  const addSchool = () => {
    setSchool([...school, { id: uuidv4(), college: "", degree: "" }]);
  };

  const removeSchool = (id) => {
    setSchool(school.filter((item) => item.id !== id));
  };

  const handleInputChangeEduc = (id, field, value) => {
    const updatedData = school.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSchool(updatedData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <h1>CV MAKER</h1>
      <div className="main">
        <div className="form">
          <PersonalData change={handleInputChange} data={data} />
          <EducationInfo
            school={school}
            change={handleInputChangeEduc}
            adding={addSchool}
            removing={removeSchool}
          />
          <WorkExperience
            work={work}
            change={handleInputChangeWork}
            adding={addWork}
            removing={removeWork}
          />
          <Skills
            skill={skill}
            change={handleInputChangeS}
            adding={addSkill}
            removing={removeSkill}
          />
        </div>
        <Resume
          personalInfo={data}
          education={school}
          work={work}
          skill={skill}
        />
      </div>
    </>
  );
}

export default App;
