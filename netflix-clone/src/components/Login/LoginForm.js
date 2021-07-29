import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";

function LoginForm({ username, password, handleChange }) {
  return (
    <div className="login__login-form">
      <div className="login__login-form__username">
        <TiUser />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="login-form__password">
        <RiLockPasswordLine />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default LoginForm;
