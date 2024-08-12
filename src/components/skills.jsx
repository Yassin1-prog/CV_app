import "../styles/style.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPlus,
  faToolbox,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills({ skill, change, adding, removing }) {
  const [visible, setVisible] = useState(false);

  const visibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="CompForm">
      <button className="hide" onClick={visibility}>
        <h2>
          <FontAwesomeIcon icon={faToolbox} className="heademoji" />
          Skills
        </h2>
        <FontAwesomeIcon icon={faUpDown} />
      </button>
      {visible && (
        <div>
          {skill.map((skill) => (
            <div key={skill.id}>
              <input
                value={skill.skills}
                onChange={(e) => change(skill.id, "skills", e.target.value)}
                name="skill"
                type="text"
                placeholder="Skill"
              />
              <button onClick={() => removing(skill.id)}>
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
