import React from "react";
import { VscAccount } from "react-icons/vsc";
import { useDispatch, connect } from "react-redux";
import { axiosBackend } from "../../js/axios";

function User({ username, loggedInUserName, friends }) {
  const dispatch = useDispatch();
  return (
    <div className="users__user">
      <div className="users__user__pic">
        <VscAccount />
      </div>
      <h1 style={{ width: "200px" }}>{username}</h1>
      <div className="users__user__info">
        <button
          className="users__user__info__add-to-friends"
          onClick={() => {
            if (
              loggedInUserName !== username &&
              !isAlreadyFriend(friends, username)
            ) {
              dispatch({ type: "ADD_TO_FRIENDS", payload: username });
              axiosBackend.put("/users/friend", {
                action: "ADD_TO_FRIENDS",
                friendName: username,
                user: loggedInUserName,
              });
            }
          }}
        >
          Add To Friends
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loggedInUserName: state.username,
  friends: state.friends,
});

export default connect(mapStateToProps)(User);

const isAlreadyFriend = (friends, friend) => {
  for (let i = 0; i < friends.length; i++) {
    if (friends[i] === friend) {
      return true;
    }
  }
  return false;
};
