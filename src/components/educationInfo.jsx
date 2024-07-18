import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/style.css";

export default function Education() {
  const [school, setSchool] = useState([]);

  const addSchool = () => {
    setSchool([...school, { id: uuidv4(), college: "", degree: "" }]);
  };

  const removeSchool = (id) => {
    setSchool(school.filter((item) => item.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    const updatedData = school.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setSchool(updatedData);
  };

  return (
    <div>
      <h2>Education</h2>
      {school.map((school) => (
        <div key={school.id}>
          <input
            value={school.college}
            onChange={(e) =>
              handleInputChange(school.id, "college", e.target.value)
            }
            name="college"
            type="text"
            placeholder="College"
          />
          <input
            value={school.degree}
            onChange={(e) =>
              handleInputChange(school.id, "degree", e.target.value)
            }
            name="degree"
            type="text"
            placeholder="Degree"
          />
          <button onClick={() => removeSchool(school.id)}>Remove</button>
        </div>
      ))}
      <button className="add" onClick={addSchool}>
        Add Education
      </button>
    </div>
  );
}
