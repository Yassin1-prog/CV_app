import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/style.css";

export default function Experience() {
  const [work, setWork] = useState([]);

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

  const handleInputChange = (id, field, value) => {
    const updatedData = work.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setWork(updatedData);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      {work.map((works) => (
        <div className="space" key={works.id}>
          <div className="module">
            <input
              value={works.company}
              onChange={(e) =>
                handleInputChange(works.id, "company", e.target.value)
              }
              name="company"
              type="text"
              placeholder="Company Name"
            />
            <input
              value={works.position}
              onChange={(e) =>
                handleInputChange(works.id, "position", e.target.value)
              }
              name="position"
              type="text"
              placeholder="Position"
            />
          </div>
          <div className="module">
            <input
              value={works.startDate}
              onChange={(e) =>
                handleInputChange(works.id, "startDate", e.target.value)
              }
              name="startDate"
              type="text"
              placeholder="Start Date"
            />
            <input
              value={works.endDate}
              onChange={(e) =>
                handleInputChange(works.id, "endDate", e.target.value)
              }
              name="endDate"
              type="text"
              placeholder="End Date"
            />
          </div>
          <div className="formfield">
            <label htmlFor="about">Tell us about yourself:</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="5"
              onChange={(e) =>
                handleInputChange(works.id, "description", e.target.value)
              }
            ></textarea>
          </div>
          <div className="module">
            <button onClick={() => removeWork(works.id)}>Remove</button>
          </div>
        </div>
      ))}
      <button className="add" onClick={addWork}>
        Add Work Experience
      </button>
    </div>
  );
}
