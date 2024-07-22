import "../styles/style.css";

export default function Experience({ work, change, adding, removing }) {
  return (
    <div>
      <h2>Work Experience</h2>
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
              onChange={(e) => change(works.id, "startDate", e.target.value)}
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
            <label htmlFor="about">Tell us about yourself:</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="5"
              onChange={(e) => change(works.id, "description", e.target.value)}
            ></textarea>
          </div>
          <div className="module">
            <button onClick={() => removing(works.id)}>Remove</button>
          </div>
        </div>
      ))}
      <button className="add" onClick={adding}>
        Add Work Experience
      </button>
    </div>
  );
}
