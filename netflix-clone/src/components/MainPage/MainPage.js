import React from 'react'
import {connect} from "react-redux";
import axios from "../../js/axios";

async function getShows(){
    let sortedShows = await axios.get('/shows').then(resp=> resp.data);
    sortedShows = await sortedShows.sort((a,b)=>{return a.rating.average - b.rating.average});
    return sortedShows;
}

function MainPage({isLoggedIn,favourites}) {
    const [shows,setShows] = React.useState([]);
    React.useEffect(()=>{
        getShows().then(resp => setShows(resp));
        console.log(shows);
    },[])
    return (
        <div className="main-page">
            <h1>Main Page</h1>
        </div>
    )
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(MainPage);
