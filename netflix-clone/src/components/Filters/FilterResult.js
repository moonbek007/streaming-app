import React from "react";

function FilterResult({ image, link, name }) {
  return (
    <div className="filter-result">
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

export default FilterResult;
