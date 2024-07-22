import "../styles/style.css";

export default function PersonalData({ change, data }) {
  return (
    <>
      <h2>Personal Info</h2>
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
    </>
  );
}
