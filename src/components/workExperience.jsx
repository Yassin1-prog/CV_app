import "../styles/style.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPlus,
  faHammer,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Experience({ work, change, adding, removing }) {
  const [visible, setVisible] = useState(false);

  const visibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="CompForm">
      <button className="hide" onClick={visibility}>
        <h2>
          <FontAwesomeIcon icon={faHammer} className="heademoji" />
          Work Experience
        </h2>
        <FontAwesomeIcon icon={faUpDown} />
      </button>
      {visible && (
        <div>
          {work.map((works) => (
            <div className="space" key={works.id}>
              <div className="module">
                <input
                  value={works.company}
                  onChange={(e) => change(works.id, "company", e.target.value)}
                  name="company"
                  type="text"
                  placeholder="Company Name"
                />
                <input
                  value={works.position}
                  onChange={(e) => change(works.id, "position", e.target.value)}
                  name="position"
                  type="text"
                  placeholder="Position"
                />
              </div>
              <div className="module">
                <input
                  value={works.startDate}
                  onChange={(e) =>
                    change(works.id, "startDate", e.target.value)
                  }
                  name="startDate"
                  type="text"
                  placeholder="Start Date"
                />
                <input
                  value={works.endDate}
                  onChange={(e) => change(works.id, "endDate", e.target.value)}
                  name="endDate"
                  type="text"
                  placeholder="End Date"
                />
              </div>
              <div className="formfield">
                <label htmlFor="about">Describe your work:</label>
                <textarea
                  name="about"
                  id="about"
                  cols="30"
                  rows="5"
                  value={works.description}
                  onChange={(e) =>
                    change(works.id, "description", e.target.value)
                  }
                ></textarea>
              </div>
              <div className="module">
                <button onClick={() => removing(works.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {visible && (
        <button className="add" onClick={adding}>
          <FontAwesomeIcon icon={faPlus} size="lg" />
        </button>
      )}
    </div>
  );
}
