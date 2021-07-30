import React from "react";
import { FaStar } from "react-icons/fa";
function Notification({
  image,
  name,
  link,
  rating,
  year,
  sender,
  officialSite,
}) {
  return (
    <>
      <p className="person-recommended">{sender}</p>
      <div className="show">
        <img src={image} alt="" className="show__image" />
        <div className="show__info">
          <p className="show__info__title">
            <a href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          </p>
          <p className="show__info__rating">
            <FaStar className="show__info__rating__icon" /> {rating}
          </p>
          <p className="show__info__period">{year.substring(0, 4)}</p>
          <p className="show__info__website">
            <a href={officialSite} target="_blank" rel="noreferrer">
              Official Website
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Notification;
