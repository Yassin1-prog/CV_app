import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/style.css";

export default function Education() {
  const [skill, setSkill] = useState([]);

  const addSkill = () => {
    setSkill([...skill, { id: uuidv4(), skills: "" }]);
  };

  const removeSkill = (id) => {
    setSkill(skill.filter((item) => item.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = skill.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSkill(updatedData);
  };

  return (
    <div>
      <h2>Skills</h2>
      {skill.map((skill) => (
        <div key={skill.id}>
          <input
            value={skill.skills}
            onChange={(e) =>
              handleInputChange(skill.id, "skills", e.target.value)
            }
            name="skill"
            type="text"
            placeholder="Skill"
          />
          <button onClick={() => removeSkill(skill.id)}>Remove</button>
        </div>
      ))}
      <button className="add" onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}
