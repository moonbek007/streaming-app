import React from "react";
import { FaStar } from "react-icons/fa";
function SearchResult() {
  return (
    <>
      <div className="show">
        <img
          src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
          alt=""
          className="show__image"
        />
        <div className="show__info">
          <div className="show__info__row1">
            <h2 className="show__info__title">
              <a
                href="https://www.tvmaze.com/shows/169/breaking-bad"
                target="_blank"
                rel="noreferrer"
              >
                Breaking Bad
              </a>
            </h2>
            <p className="show__info__status">Ended</p>
          </div>
          <div className="show__info__row2">
            <p className="show__info__rating">
              <FaStar className="show__info__rating__icon" /> 9.2
            </p>
            <p className="show__info__period">2012</p>
            <p className="show__info__genres">Drama , Crime , Thriller</p>
          </div>
          <p className="show__info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi
            distinctio voluptate,
          </p>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
