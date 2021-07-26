import React from "react";
import "../../css/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import {
  MdExplore,
  MdNotificationsActive,
  MdFavoriteBorder,
} from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Notifications from "./Notifications/Notifications";
function Header({ isLoggedIn, activeLink, showNotifications }) {
  const [searchWord, setSearchWord] = React.useState("Random Show");

  const searchRef = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <>
      <div className="header__input">
        <button className="header__input__clear-button">
          <FaTimesCircle className="hedaer__input__clear-button__icon" />
        </button>
        <input
          type="text"
          value={searchWord}
          ref={searchRef}
          onChange={handleChange}
          placeholder={"Search a Show"}
          className="header__input__input-field"
        />
        <button className="header__input__search-button">
          <AiOutlineSearch className="header__input__search-button__icon" />
        </button>
      </div>
      <div className="header__icons">
        {showNotifications ? <Notifications /> : ""}
        <button
          className="header__icons__notifications"
          onClick={() => {
            if (isLoggedIn) {
              dispatch({ type: "TOGGLE_NOTIFICATIONS" });
            }
          }}
        >
          <Link to={isLoggedIn ? "#" : "/login"}>
            <MdNotificationsActive
              className={`header__icons__notifications__icon ${
                activeLink === "notifications" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>
        <button className="header__icons__explore">
          <Link to="/explore">
            <MdExplore
              className={`header__icons__explore__icon ${
                activeLink === "explore" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>
        <button className="header__icons__favourites">
          <Link to={isLoggedIn ? "/favourites" : "/login"}>
            <MdFavoriteBorder
              className={`header__icons__favourites__icon ${
                activeLink === "favourites" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>

        <button className="header__icons__login">
          <Link to="/login">
            {isLoggedIn ? (
              <VscAccount className={`header__icons__login__account-icon`} />
            ) : (
              <IoMdLogIn
                className={`header__icons__login__login-icon ${
                  activeLink === "login" ? "header__icons__active" : ""
                }`}
              />
            )}
          </Link>
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  activeLink: state.activeLink,
  showNotifications: state.showNotifications,
});

export default connect(mapStateToProps)(Header);
