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
import { connect } from "react-redux";

function Header({ isLoggedIn }) {
  const [searchWord, setSearchWord] = React.useState("Random Show");

  const searchRef = React.useRef();

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
        <button className="header__icons__notifications">
          <MdNotificationsActive className="header__icons__notifications__icon" />
        </button>
        <button className="header__icons__explore">
          <MdExplore className="header__icons__explore__icon" />
        </button>
        <button className="header__icons__favourites">
          <MdFavoriteBorder className="header__icons__favourites__icon" />
        </button>
        <button className="header__icons__login">
          {isLoggedIn ? (
            <VscAccount className="header__icons__login__account-icon" />
          ) : (
            <IoMdLogIn className="header__icons__login__login-icon" />
          )}
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Header);
