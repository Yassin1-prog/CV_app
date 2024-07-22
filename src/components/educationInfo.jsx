import "../styles/style.css";

export default function Education({ school, change, adding, removing }) {
  return (
    <div>
      <h2>Education</h2>
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
          <button onClick={() => removing(school.id)}>Remove</button>
        </div>
      ))}
      <button className="add" onClick={adding}>
        Add Education
      </button>
    </div>
  );
}
