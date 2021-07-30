import React from "react";
import { connect, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { axiosBackend } from "../../../js/axios";

function Friends({ friends, showFriends, sender, showToRecommend }) {
  const dispatch = useDispatch();
  return (
    <div className={`friends ${showFriends ? "friends-open" : ""}`}>
      <button
        className="close-button"
        onClick={() => {
          dispatch({ type: "CLOSE_FRIENDS" });
        }}
      >
        <FaTimes />
      </button>
      <h3 className="friends__title">Friends</h3>
      {friends.length > 0
        ? friends.map((friend, index) => {
            return (
              <>
                <h4
                  key={index}
                  className="friends__friend"
                  onClick={() => {
                    console.log(showToRecommend);
                    axiosBackend.put("/users/notification", {
                      action: "SEND_NOTIICATION",
                      receiver: friend,
                      sender: sender,
                      show: showToRecommend,
                    });
                  }}
                >
                  {index + 1} <VscAccount />@{friend}
                </h4>
              </>
            );
          })
        : ""}
    </div>
  );
}

const mapStateToProps = (state) => ({
  friends: state.friends,
  showFriends: state.showFriends,
  sender: state.username,
  showToRecommend: state.showToRecommend,
});

export default connect(mapStateToProps)(Friends);
