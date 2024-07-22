import "../styles/style.css";

export default function Skills({ skill, change, adding, removing }) {
  return (
    <div>
      <h2>Skills</h2>
      {skill.map((skill) => (
        <div key={skill.id}>
          <input
            value={skill.skills}
            onChange={(e) => change(skill.id, "skills", e.target.value)}
            name="skill"
            type="text"
            placeholder="Skill"
          />
          <button onClick={() => removing(skill.id)}>Remove</button>
        </div>
      ))}
      <button className="add" onClick={adding}>
        Add Skill
      </button>
    </div>
  );
}
