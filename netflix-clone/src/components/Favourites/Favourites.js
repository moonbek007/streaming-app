import React from "react";
import { connect } from "react-redux";
import "../../css/favourites.css";
import Favourite from "./Favourite";

function Favourites({ favourites }) {
  return (
    <div className="favourites">
      <Favourite />
    </div>
  );
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

export default connect(mapStateToProps)(Favourites);
