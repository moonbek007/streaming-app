import React from 'react'
import {connect} from "react-redux";

function MainPage({isLoggedIn,favourites}) {
    React.useEffect(()=>{
        console.log(isLoggedIn,favourites);
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
