import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { TiUser } from "react-icons/ti";
import { FiMail } from "react-icons/fi";

function RegistrationForm({ username, password, email, handleChange }) {
  return (
    <div className="login__registration-form">
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
      <div className="login-form__email">
        <FiMail />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
