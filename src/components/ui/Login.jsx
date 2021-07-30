import React, { useState } from "react";
import { validateEmail } from "../../util/Util";
function Login() {
  const [localState, setLocalState] = useState({
    email: "",
    emailError: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setLocalState((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(localState.email)) {
      setLocalState((prevState) => {
        return { ...prevState, emailError: "ENTER VAILD EMAIL" };
      });
      return;
    }
    alert(`Email : ${localState.email} Password : ${localState.password}`);
    setLocalState({
      email: "",
      password: "",
      emailError: "",
    });
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "3rem", fontWeight: "bold" }}>Login</p>
        <p style={{ fontSize: "1.5rem" }}>
          Get access to your Orders, Wishlist and Recommendations
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            style={{
              borderBottom: localState.emailError && "2px solid red",
            }}
            value={localState.email}
            onChange={handleChange}
            required
          />
          <small className="error-message">{localState.emailError}</small>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={localState.password}
            onChange={handleChange}
            required
          />
          <button className="button">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
