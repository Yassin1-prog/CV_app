import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPlus,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills({ skill, change, adding, removing }) {
  return (
    <div className="CompForm">
      <h2>
        <FontAwesomeIcon icon={faToolbox} className="heademoji" />
        Skills
      </h2>
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
      <button className="add" onClick={adding}>
        <FontAwesomeIcon icon={faPlus} size="lg" />
      </button>
    </div>
  );
}
