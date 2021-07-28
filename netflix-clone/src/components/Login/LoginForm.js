import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { useDispatch } from "react-redux";

function LoginForm() {
  return (
    <div className="login__login-form">
      <div className="login__login-form__username">
        <TiUser />
        <input type="text" placeholder="Username" />
      </div>
      <div className="login-form__password">
        <RiLockPasswordLine />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default LoginForm;
