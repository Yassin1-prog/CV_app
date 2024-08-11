import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function PersonalData({ change, data }) {
  return (
    <div className="CompForm">
      <h2>
        <FontAwesomeIcon icon={faUser} className="heademoji" />
        Personal Info
      </h2>
      <form>
        <input
          value={data.firstName}
          onChange={change}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          value={data.lastName}
          onChange={change}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <div className="formfield">
          <label htmlFor="about">Tell us about yourself:</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="5"
            value={data.about}
            onChange={change}
          ></textarea>
        </div>
        <input
          value={data.email}
          onChange={change}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          value={data.phone}
          onChange={change}
          name="phone"
          type="number"
          placeholder="Phone Number"
        />
      </form>
    </div>
  );
}
