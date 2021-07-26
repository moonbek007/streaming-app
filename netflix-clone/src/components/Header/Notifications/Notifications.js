import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import "../../../css/notifications.css";
import Notification from "./Notification";
function Notifications({ notifications, showNotifications, isLoggedIn }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`notifications ${
        showNotifications ? "notifications-open" : ""
      }`}
    >
      <div className="notifications__header">
        <h5>Notifications</h5>
        <div
          onClick={() => {
            if (isLoggedIn) {
              dispatch({ type: "TOGGLE_NOTIFICATIONS" });
            }
          }}
          className="notifications__header__close-button"
        >
          <AiFillCloseSquare />
        </div>
      </div>
      {/* {notifications.map((show) => {
        return show;
      })} */}
      <p className="person-recommended">Oybek Mamatov</p>
      <div className="show">
        <img
          src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
          alt=""
          className="show__image"
        />
        <div className="show__info">
          <p className="show__info__title">
            <a
              href="https://www.tvmaze.com/shows/169/breaking-bad"
              target="_blank"
              rel="noreferrer"
            >
              Breaking Bad
            </a>
          </p>
          <p className="show__info__rating">
            <FaStar className="show__info__rating__icon" /> 9.2 / 10
          </p>
          <p className="show__info__period">2012 - 2015</p>
          <p className="show__info__website">
            <a
              href="http://www.amc.com/shows/breaking-bad"
              target="_blank"
              rel="noreferrer"
            >
              Official Website
            </a>
          </p>
        </div>
      </div>
      <Notification />
    </div>
  );
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  showNotifications: state.showNotifications,
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Notifications);
