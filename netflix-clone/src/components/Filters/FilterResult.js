import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FcShare } from "react-icons/fc";
import { connect, useDispatch } from "react-redux";
function FilterResult({ image, link, name, isLoggedIn }) {
  const [isFavourite, setIsFavourite] = React.useState(false);
  const [showButtons, setShowButons] = React.useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className="filter-result"
      onMouseOver={() => {
        setShowButons(true);
      }}
      onMouseLeave={() => {
        setShowButons(false);
      }}
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
      <a
        href={link}
        className="filter-result__link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} alt="" />
      </a>
      <p className="filter-result-title">{name}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({ isLoggedIn: state.isLoggedIn });
export default connect(mapStateToProps)(FilterResult);
