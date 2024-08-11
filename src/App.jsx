import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import PersonalData from "./components/personalData.jsx";
import EducationInfo from "./components/educationInfo.jsx";
import WorkExperience from "./components/workExperience.jsx";
import Skills from "./components/skills.jsx";
import Resume from "./components/resume.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRepeat,
  faUpload,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const initialData = {
  firstName: "Micheal",
  lastName: "Alvrazo",
  email: "michealvrz777@gmail.com",
  phone: "01069928385",
  about:
    "I am 20 years old and have always been passionate about developing software to improve lives. I always listen to others to get insight and keep improving in my field and i always try to stay top of my game. I am competitive but also a team player. Mylife motto is always to look for challenges. Esy peazy lemon squezy",
};

function App() {
  const [data, setData] = useState(initialData);
  const [school, setSchool] = useState([
    {
      id: uuidv4(),
      college: "Boston City University",
      degree: "Bachelors in Biology",
    },
    {
      id: uuidv4(),
      college: "Technical University Munich",
      degree: "MCs in Advanced Nanotechnology",
    },
  ]);
  const [work, setWork] = useState([
    {
      id: uuidv4(),
      company: "Alphabet Inc.",
      position: "Software Engineer",
      startDate: "12/3/2024",
      endDate: "present",
      description:
        "Responsibilities include Design, develop, test, deploy, maintain, and improve software. Manage project priorities, deadlines, and deliverables. Take on tasks as requested, following through to completion despite roadblocks or distractions.",
    },
  ]);
  const [skill, setSkill] = useState([
    { id: uuidv4(), skills: "Leadership qualities with enhanced vision" },
    {
      id: uuidv4(),
      skills: "Grit, determination and perserverence for perfection",
    },
  ]);

  const reset = () => {
    setSkill([]);
    setSchool([]);
    setWork([]);
    setData({ firstName: "", lastName: "", email: "", phone: "", about: "" });
  };

  const load = () => {
    setSkill([
      { id: uuidv4(), skills: "Leadership qualities with enhanced vision" },
      {
        id: uuidv4(),
        skills: "Grit, determination and perserverence for perfection",
      },
    ]);
    setSchool([
      {
        id: uuidv4(),
        college: "Boston City University",
        degree: "Bachelors in Biology",
      },
      {
        id: uuidv4(),
        college: "Technical University Munich",
        degree: "MCs in Advanced Nanotechnology",
      },
    ]);
    setWork([
      {
        id: uuidv4(),
        company: "Alphabet Inc.",
        position: "Software Engineer",
        startDate: "12/3/2024",
        endDate: "present",
        description:
          "Responsibilities include Design, develop, test, deploy, maintain, and improve software. Manage project priorities, deadlines, and deliverables. Take on tasks as requested, following through to completion despite roadblocks or distractions.",
      },
    ]);
    setData({
      firstName: "Micheal",
      lastName: "Alvrazo",
      email: "michealvrz777@gmail.com",
      phone: "01069928385",
      about:
        "I am 20 years old and have always been passionate about developing software to improve lives. I always listen to others to get insight and keep improving in my field and i always try to stay top of my game. I am competitive but also a team player. Mylife motto is always to look for challenges. Esy peazy lemon squezy",
    });
  };

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
      <h1>
        <FontAwesomeIcon icon={faLayerGroup} className="emojii" />
        CV MAKER
      </h1>
      <div className="main">
        <div className="form">
          <button onClick={reset}>
            <FontAwesomeIcon icon={faRepeat} />
          </button>
          <button onClick={load}>
            <FontAwesomeIcon icon={faUpload} />
          </button>
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
