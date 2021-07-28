import React from "react";
import { connect, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import "../../css/login.css";

function Login({ credentials }) {
  const [formToShow, setFormToShow] = React.useState("login");
  return (
    <>
      <div className="login">
        <h1>{formToShow === "login" ? "Sign in" : "Sign up"}</h1>
        {formToShow === "login" ? <LoginForm /> : <RegistrationForm />}
        <button className="login__btn">
          {formToShow === "login" ? "Sign in" : "Sign up"}
        </button>
        or
        <button id="signup-btn" onClick={() => setFormToShow("signup")}>
          Sign Up
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  credentials: state.credentials,
});

export default connect(mapStateToProps)(Login);
