import "./App.css";
import React from "react";
import firebase from "firebase";

function App() {
  React.useEffect(() => {
    const db = firebase.database();
  }, []);
  return <div className="App"></div>;
}

export default App;
