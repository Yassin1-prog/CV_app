import "../styles/style.css";

export default function Resume({ personalInfo, education, work, skill }) {
  return (
    <>
      <div className="header">
        <h2>{personalInfo.firstName + " " + personalInfo.lastName}</h2>
        <div>
          <span>{personalInfo.phone}</span>
          <span>{personalInfo.email}</span>
        </div>
      </div>
      <div>
        <p>{personalInfo.about}</p>
      </div>
      <div className="education">
        <h2>Education</h2>
        {education.map((school) => (
          <div key={school.id}>
            <p>College: {school.college}</p>
            <p>Degree: {school.degree}</p>
          </div>
        ))}
      </div>
      <div className="workExperience">
        <h2>Proffesional Experience</h2>
        {work.map((works) => (
          <div key={works.id}>
            <p>
              {works.company +
                " " +
                works.position +
                " " +
                works.startDate +
                " - " +
                works.endDate}
            </p>
            <p>{works.description}</p>
          </div>
        ))}
      </div>
      <div className="skills">
        <h2>Skillset</h2>
        {skill.map((skill) => (
          <div key={skill.id}>
            <p>
              <b>{skill.skills}</b>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
