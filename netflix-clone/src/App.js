import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Filters from "./components/Filters/Filters";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import store from "./js/redux.js";
import firebase from "firebase";

export const db = firebase.database();

function App() {
  React.useEffect(() => {});
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <header className="header">
            <Route>
              <Header />
            </Route>
          </header>
          <main>
            <Switch>
              <Route path="/filters">
                <Filters />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <MainPage />
              </Route>
            </Switch>
          </main>
          <footer className="footer">
            <Route>
              <Footer />
            </Route>
          </footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
