import React from "react";
import User from "./User";
import { connect } from "react-redux";
function Users({ users }) {
  React.useEffect(() => {
    console.log(users);
  });
  return (
    <div className="users">
      {users.map((user, index) => {
        return <User username={user.username} key={index} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({ users: state.users });
export default connect(mapStateToProps)(Users);
