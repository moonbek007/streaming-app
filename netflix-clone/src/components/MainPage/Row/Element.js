import React from "react";
import { connect, useDispatch } from "react-redux";
import { FcShare } from "react-icons/fc";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { axiosBackend } from "../../../js/axios";
function Element({
  link,
  image,
  name,
  year,
  country,
  isLoggedIn,
  show,
  username,
}) {
  const [isFavourite, setIsFavourite] = React.useState(false);
  const [showButtons, setShowButons] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <div
      onMouseOver={() => {
        setShowButons(true);
      }}
      onMouseLeave={() => {
        setShowButons(false);
      }}
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <p
        className={
          isLoggedIn && showButtons ? "buttons" : "buttons  buttons-invisible"
        }
      >
        <button
          className="share"
          onClick={() => {
            dispatch({ type: "OPEN_FRIENDS", payload: show });
          }}
        >
          <FcShare />
        </button>
        <button
          className="heart"
          onClick={() => {
            setIsFavourite(!isFavourite);
            dispatch({
              type: `${
                isFavourite ? "REMOVE_FROM_FAVOURITES" : "ADD_TO_FAVOURITES"
              }`,
              payload: show,
            });
            axiosBackend.put("/users/favourite", {
              show: show,
              user: username,
            });
          }}
        >
          {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </p>
      <a className="element" href={link} target="_blank" rel="noreferrer">
        <img src={image} alt="" />
        <div className="element__info">
          <p className="element__info__title">{name}</p>
          <p className="element__info__year-country">
            {year}, {country}
          </p>
        </div>
      </a>
    </div>
  );
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  username: state.username,
});

export default connect(mapStateToProps)(Element);
