import React from "react";
import { connect, useDispatch } from "react-redux";
import axios from "../../js/axios";
import "../../css/explore.css";
import Row from "./Row/Row";

async function getShows() {
  let sortedShows = await axios.get("/shows").then((resp) => resp.data);
  sortedShows = await sortedShows.sort((a, b) => {
    return b.rating.average - a.rating.average;
  });
  return sortedShows;
}

function MainPage({ isLoggedIn, favourites, showsByGenre }) {
  const dispatch = useDispatch();
  const [shows, setShows] = React.useState([]);
  React.useEffect(() => {
    getShows().then((resp) => {
      setShows(resp);
      dispatch({ type: "GET_ALL_SHOWS", payload: resp });
    });
  }, []);
  return (
    <div className="explore">
      {genres.map((item, index) => {
        return <Row genre={item} key={index} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const genres = [
  "Drama",
  "Action",
  "Adventure",
  "Crime",
  "Anime",
  "Horror",
  "Thriller",
  "Comedy",
  "Romance",
  "Family",
  "War",
];

export default connect(mapStateToProps)(MainPage);
