import React from "react";
import "../../css/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import {
  MdExplore,
  MdNotificationsActive,
  MdFavoriteBorder,
} from "react-icons/md";
import { FaTimesCircle } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GoSettings } from "react-icons/go";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Notifications from "./Notifications/Notifications";
import SearchResults from "./SearchResults/SearchResults";
import Friends from "./Friends/Friends";

function Header({
  isLoggedIn,
  activeLink,
  showNotifications,
  searchWord,
  numOfNotifications,
}) {
  const searchRef = React.useRef();
  const filtersRef = React.useRef();
  const dispatch = useDispatch();

  React.useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleChange = (event) => {
    dispatch({ type: "SET_SEARCH_WORD", payload: event.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      filtersRef.current.click();
    }
  };

  const handleSearchButtonClick = () => {
    filtersRef.current.click();
    dispatch({ type: "ADD_TO_FILTERED_SHOWS", payload: searchWord });
  };

  const handleClearButtonClick = () => {
    dispatch({ type: "CLEAR_SEARCH_WORD" });
  };

  return (
    <>
      <Friends />
      <div className="header__input">
        <button
          className="header__input__clear-button"
          onClick={handleClearButtonClick}
        >
          <FaTimesCircle className="hedaer__input__clear-button__icon" />
        </button>
        <input
          type="text"
          value={searchWord}
          ref={searchRef}
          onChange={handleChange}
          placeholder={"Search a Show"}
          className="header__input__input-field"
          onKeyDown={handleKeyDown}
        />
        <button
          className="header__input__search-button"
          onClick={handleSearchButtonClick}
        >
          <AiOutlineSearch className="header__input__search-button__icon" />
        </button>
        <SearchResults />
      </div>
      <div className="header__icons">
        {showNotifications ? <Notifications /> : ""}
        <button className="header__icons__filters">
          <Link
            to="/filters"
            ref={filtersRef}
            onClick={() => {
              dispatch({ type: "CHANGE_ACTIVE_LINK", payload: "/filters" });
            }}
            id="filters-icon"
          >
            <GoSettings
              className={`header__icons__filters__icon ${
                activeLink === "filters" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>
        <button
          className="header__icons__notifications"
          onClick={() => {
            if (isLoggedIn) {
              dispatch({ type: "TOGGLE_NOTIFICATIONS" });
            }
          }}
        >
          <Link
            to={isLoggedIn ? "#" : "/login"}
            onClick={() => {
              if (!isLoggedIn) {
                dispatch({ type: "CHANGE_ACTIVE_LINK", payload: "/login" });
              }
            }}
            id="notifications-icon"
          >
            <MdNotificationsActive
              className={`header__icons__notifications__icon ${
                activeLink === "notifications" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>
        <button className="header__icons__explore">
          <Link
            to="/explore"
            onClick={() => {
              dispatch({ type: "CHANGE_ACTIVE_LINK", payload: "/explore" });
            }}
            id="explore-icon"
          >
            <MdExplore
              className={`header__icons__explore__icon ${
                activeLink === "explore" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>
        <button className="header__icons__favourites">
          <Link
            to={isLoggedIn ? "/favourites" : "/login"}
            onClick={() => {
              dispatch({
                type: "CHANGE_ACTIVE_LINK",
                payload: isLoggedIn ? "/favourites" : "/login",
              });
            }}
            id="favourites-icon"
          >
            <MdFavoriteBorder
              className={`header__icons__favourites__icon ${
                activeLink === "favourites" ? "header__icons__active" : ""
              }`}
            />
          </Link>
        </button>

        <button className="header__icons__login">
          <Link
            to={!isLoggedIn ? `/login` : "/users"}
            onClick={() => {
              dispatch({
                type: "CHANGE_ACTIVE_LINK",
                payload: "/login",
              });
            }}
            id="login-icon"
          >
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
  searchWord: state.searchWord,
  numOfNotifications: state.notifications.length,
});

export default connect(mapStateToProps)(Header);
