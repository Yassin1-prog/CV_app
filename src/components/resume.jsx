import "../styles/resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faNewspaper,
  faHandFist,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Resume({ personalInfo, education, work, skill }) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div className="header">
        <h2>
          <FontAwesomeIcon icon={faCircleUser} className="emoji" />
          {personalInfo.firstName + " " + personalInfo.lastName}
        </h2>
        <div className="info">
          <div>
            <FontAwesomeIcon icon={faPhone} className="emoji" />
            {personalInfo.phone}
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="emoji" />
            {personalInfo.email}
          </div>
        </div>
        <div className="about">
          <p>{personalInfo.about}</p>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        {education.map((school) => (
          <div key={school.id} className="edu">
            <div className="college">
              <FontAwesomeIcon icon={faNewspaper} className="emoji" />
              {school.college + ": "}
            </div>
            <div className="major">{school.degree}</div>
          </div>
        ))}
      </div>
      <div className="workExperience">
        <h2>Proffesional Experience</h2>
        {work.map((works) => (
          <div key={works.id} className="work">
            <div className="time">
              {works.startDate} <span>-</span>
              {" " + works.endDate}
            </div>
            <div className="bulk">
              <div className="workplace">
                <span>{works.company + ", "}</span>
                <span className="pos">{works.position}</span>
              </div>
              <div className="descr">{works.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="skills">
        <h2>Skillset</h2>
        <ul>
          {skill.map((skill) => (
            <li key={skill.id}>
              <FontAwesomeIcon icon={faHandFist} className="emoji" />
              {skill.skills}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
