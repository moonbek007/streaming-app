import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiImdb } from "react-icons/si";

function ExtraLinks() {
  return (
    <>
      <div className="favourite__links">
        <a
          href={`https://www.imdb.com/title/tt0903747/`}
          target="_blank"
          rel="noreferrer"
        >
          <SiImdb className="search-result__show__info__rating__icon" />
        </a>
        <a
          href={`https://www.imdb.com/title/tt0903747/`}
          target="_blank"
          rel="noreferrer"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </>
  );
}

export default ExtraLinks;
