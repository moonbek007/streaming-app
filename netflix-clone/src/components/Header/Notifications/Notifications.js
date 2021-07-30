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
      {notifications.length > 0
        ? notifications.map((show) => {
            return (
              <Notification
                key={show.id}
                image={show.image.medium}
                name={show.name}
                link={show.url}
                rating={show?.rating?.average ?? "N/A"}
                year={show.premiered}
                sender={show.sender}
                officialSite={show?.officialSite ?? "#"}
              />
            );
          })
        : ""}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  showNotifications: state.showNotifications,
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Notifications);
