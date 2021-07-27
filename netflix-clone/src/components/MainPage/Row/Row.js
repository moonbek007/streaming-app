import React from "react";
import Element from "./Element";
import { Link } from "react-router-dom";

function Row() {
  return (
    <>
      <div className="explore__row-header">
        <h1 className="explore__row-header__title">Drama</h1>
        <Link to={`/filters?genre=drama`} className="explore__row-header__link">
          Full List
        </Link>
      </div>
      <div className="explore__row-elements">
        <Element />
        <Element />
        <Element />
        <Element />
        <Element />
      </div>
    </>
  );
}

export default Row;
