import React from "react";
import { connect, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import "../../css/login.css";

function Login({ credentials }) {
  const [formToShow, setFormToShow] = React.useState("login");
  const [userInfo, setUserInfo] = React.useState({
    text: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.type]: event.target.value });
  };
  return (
    <>
      <div className="login">
        <h1>{formToShow === "login" ? "Sign in" : "Sign up"}</h1>
        {formToShow === "login" ? (
          <LoginForm
            username={userInfo.text}
            password={userInfo.password}
            handleChange={handleChange}
          />
        ) : (
          <RegistrationForm
            email={userInfo.email}
            username={userInfo.text}
            password={userInfo.password}
            handleChange={handleChange}
          />
        )}
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <button className="signin-btn" type="submit">
            {formToShow === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
        or
        <button
          id="signup-btn"
          onClick={() =>
            setFormToShow(`${formToShow === "login" ? "signup" : "login"}`)
          }
        >
          {formToShow === "login" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  credentials: state.credentials,
});

export default connect(mapStateToProps)(Login);
