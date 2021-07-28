import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";
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
      <Notification />
      <Notification />
      <Notification />
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
