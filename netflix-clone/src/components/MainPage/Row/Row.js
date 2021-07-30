import React from "react";
import Element from "./Element";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { VscLoading } from "react-icons/vsc";
async function getShowsByGenre(showsToFilter, genre) {
  const t = showsToFilter.filter((show) => {
    return containsGenre(show.genres, genre);
  });
  return t;
}

function Row({ genre, showsToFilter }) {
  const [shows, setShows] = React.useState([]);
  React.useEffect(() => {
    getShowsByGenre(showsToFilter, genre).then((resp) => setShows(resp));
  }, [genre, showsToFilter]);
  return (
    <>
      <div className="explore__row-header">
        <h1 className="explore__row-header__title">{genre.toUpperCase()}</h1>
      </div>
      <div className="explore__row-elements">
        {shows.length !== 0 ? (
          shows.map((show) => {
            return (
              <Element
                show={show}
                key={show.id}
                image={show.image.medium}
                name={show.name}
                link={show.url}
                year={show.premiered.substring(0, 4)}
                country={show?.network?.country?.name}
              />
            );
          })
        ) : (
          <div className="loading">
            <VscLoading className="loading-icon" />
          </div>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  showsToFilter: state.shows,
});

const containsGenre = (genres, genre) => {
  for (let i = 0; i < genres.length; i++) {
    if (genres[i] === genre) {
      return true;
    }
  }
  return false;
};

export default connect(mapStateToProps)(Row);
