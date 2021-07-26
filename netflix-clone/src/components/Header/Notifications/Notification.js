import React from "react";
import { FaStar } from "react-icons/fa";
function Notification() {
  return (
    <>
      <p className="person-recommended">Oybek Mamatov</p>
      <div className="show">
        <img
          src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
          alt=""
          className="show__image"
        />
        <div className="show__info">
          <p className="show__info__title">
            <a
              href="https://www.tvmaze.com/shows/169/breaking-bad"
              target="_blank"
              rel="noreferrer"
            >
              Breaking Bad
            </a>
          </p>
          <p className="show__info__rating">
            <FaStar className="show__info__rating__icon" /> 9.2 / 10
          </p>
          <p className="show__info__period">2012 - 2015</p>
          <p className="show__info__website">
            <a
              href="http://www.amc.com/shows/breaking-bad"
              target="_blank"
              rel="noreferrer"
            >
              Official Website
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Notification;
