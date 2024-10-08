import "../styles/style.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPlus,
  faGraduationCap,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Education({ school, change, adding, removing }) {
  const [visible, setVisible] = useState(false);

  const visibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="CompForm">
      <button className="hide" onClick={visibility}>
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} className="heademoji" />
          Education
        </h2>
        <FontAwesomeIcon icon={faUpDown} />
      </button>
      {visible && (
        <div>
          {school.map((school) => (
            <div key={school.id}>
              <input
                value={school.college}
                onChange={(e) => change(school.id, "college", e.target.value)}
                name="college"
                type="text"
                placeholder="College"
              />
              <input
                value={school.degree}
                onChange={(e) => change(school.id, "degree", e.target.value)}
                name="degree"
                type="text"
                placeholder="Degree"
              />
              <button onClick={() => removing(school.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
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
