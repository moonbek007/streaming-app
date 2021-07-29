import React from "react";
import { FaStar } from "react-icons/fa";
import ExtraLinks from "./ExtraLinks";

function Favourite({
  image,
  link,
  name,
  status,
  rating,
  year,
  genres,
  description,
  officialSite,
  imdb,
}) {
  React.useEffect(() => {
    console.log(genres);
  });
  return (
    <>
      <div className="search-result__show">
        <img src={image} alt="" className="search-result__show__image" />
        <div className="search-result__show__info">
          <div className="search-result__show__info__row1">
            <h2 className="search-result__show__info__title">
              <a href={link} target="_blank" rel="noreferrer">
                {name}
              </a>
            </h2>
            <ExtraLinks imdb={imdb} officialSite={officialSite} />
            <p className="search-result__show__info__status">{status}</p>
          </div>
          <div className="search-result__show__info__row2">
            <p className="search-result__show__info__rating">
              <FaStar className="search-result__show__info__rating__icon" />{" "}
              {rating}
            </p>
            <p className="search-result__show__info__period">{year}</p>
            <p className="search-result__show__info__genres">
              {genres?.join(", ") ?? ""}
            </p>
          </div>
          <p
            className="search-result__show__info__description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </>
  );
}

export default Favourite;
