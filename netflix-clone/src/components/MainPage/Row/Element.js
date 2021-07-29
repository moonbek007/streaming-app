import React from "react";
import { connect, useDispatch } from "react-redux";
import { FcShare } from "react-icons/fc";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
function Element({ link, image, name, year, country, isLoggedIn }) {
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
        <button className="share" onClick={() => {}}>
          <FcShare />
        </button>
        <button
          className="heart"
          onClick={() => {
            setIsFavourite(!isFavourite);
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
const mapStateToProps = (state) => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapStateToProps)(Element);
