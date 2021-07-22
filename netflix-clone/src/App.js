import "./css/styles.css";
import React from "react";
import firebase from "firebase";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Filters from "./components/Filters/Filters";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  React.useEffect(() => {
    const db = firebase.database();
    console.log(db);
  }, []);
  return (
    <>
      <Router>
        <header className="header">
          <Route>
            <Header/>
          </Route>
        </header>
        <main>
          <Switch>
            <Route path="/">
              <MainPage/>
            </Route>
            <Route path="/search">
              <Filters/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </main>
        <footer className="footer">
          <Route>
            <Footer/>
          </Route>
        </footer>
      </Router>
    </>
  )
}

export default App;
