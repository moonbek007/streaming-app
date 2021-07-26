import React from "react";
import { connect, useDispatch } from "react-redux";
import axios from "../../js/axios";

async function getShows() {
  let sortedShows = await axios.get("/shows").then((resp) => resp.data);
  sortedShows = await sortedShows.sort((a, b) => {
    return b.rating.average - a.rating.average;
  });
  return sortedShows;
}

function MainPage({ isLoggedIn, favourites }) {
  const dispactch = useDispatch();
  const [shows, setShows] = React.useState([]);
  React.useEffect(() => {
    getShows().then((resp) => {
      setShows(resp);
      dispactch({ type: "GET_ALL_SHOWS", payload: resp });
    });
  }, []);
  return (
    <div className="main-page">
      <h1>Main Page</h1>
      <h2>{shows[9]?.rating?.average ?? "...loading"}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(MainPage);
