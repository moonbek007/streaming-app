import React from "react";
import { connect, useDispatch } from "react-redux";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import "../../css/login.css";
import { Link } from "react-router-dom";
import { axiosBackend } from "../../js/axios";

function Login({ credentials }) {
  const [formToShow, setFormToShow] = React.useState("login");
  const [showWrongUser, setShowWrongUser] = React.useState(false);
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = React.useState({
    text: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.type]: event.target.value });
  };
  const linkRef = React.useRef();
  return (
    <>
      <div className="login">
        <p className={`modal ${showWrongUser ? "modal-open" : ""}`}>
          Incorrect username or password
        </p>
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
            if (formToShow === "login") {
              async function getUsers() {
                const req = await axiosBackend.get("/users");
                const data = req.data;
                let doesUserExist = false;
                let user = {};
                for (let i = 0; i < data.length; i++) {
                  if (
                    data[i].username === userInfo.text &&
                    data[i].password === userInfo.password
                  ) {
                    doesUserExist = true;
                    user = data[i];
                  }
                }
                if (doesUserExist) {
                  dispatch({ type: "LOGIN_USER", payload: user });
                  linkRef.current.click();
                } else {
                  setShowWrongUser(true);
                  setTimeout(() => {
                    setShowWrongUser(false);
                  }, 2000);
                }
              }
              getUsers();
            } else {
              axiosBackend.post("/users", {
                username: userInfo.text,
                password: userInfo.password,
                email: userInfo.email,
              });
              linkRef.current.click();
              dispatch({ type: "SIGN_UP_NEW_USER", payload: { ...userInfo } });
              setUserInfo({ text: "", password: "", email: "" });
            }
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
        <Link to="/explore" ref={linkRef}></Link>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  credentials: state.credentials,
});

export default connect(mapStateToProps)(Login);
