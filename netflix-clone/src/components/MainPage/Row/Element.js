import React from "react";

function Element() {
  return (
    <a className="element" href="www.google.com">
      <img
        src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
        alt=""
      />
      <div className="element__info">
        <p className="element__info__title">Breaking Bad</p>
        <p className="element__info__year-country">2021, USA</p>
      </div>
    </a>
  );
}

export default Element;
