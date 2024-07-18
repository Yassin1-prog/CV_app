import { useState } from "react";
import "../styles/style.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  about: "",
};

export default function PersonalData() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      <h2>Personal Info</h2>
      <form>
        <input
          value={values.firstName}
          onChange={handleInputChange}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          value={values.lastName}
          onChange={handleInputChange}
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
            onChange={handleInputChange}
          ></textarea>
        </div>
        <input
          value={values.email}
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          value={values.phone}
          onChange={handleInputChange}
          name="phone"
          type="number"
          placeholder="Phone Number"
        />
      </form>
    </>
  );
}
