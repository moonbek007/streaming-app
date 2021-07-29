import React from "react";
import { connect } from "react-redux";
import "../../css/favourites.css";
import Favourite from "./Favourite";

function Favourites({ favourites }) {
  return (
    <div className="favourites">
      {favourites.length > 0
        ? favourites.map((show) => {
            return (
              <Favourite
                key={show.id}
                image={show.image.medium}
                name={show.name}
                link={show.url}
                year={show.premiered.substring(0, 4)}
                country={show?.network?.country?.name}
                imdb={show?.externals?.imdb ?? "#"}
                officialSite={show?.officialSite ?? "#"}
                rating={show?.rating?.average ?? "N/A"}
                status={show.status}
                description={show.summary}
                genres={show.genres}
              />
            );
          })
        : ""}
      <Favourite />
    </div>
  );
}

const mapStateToProps = (state) => ({
  favourites: state.shows,
});

export default connect(mapStateToProps)(Favourites);
