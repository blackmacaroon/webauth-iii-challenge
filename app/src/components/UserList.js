import React from "react";
import axios from "axios";
import "../auth/intercept";
import requiresAuth from "../auth/requiresAuth";

class UserList extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <h2>User List</h2>
        <ul>
          {this.state.users.map(u => {
                return(<li>hi</li>)
            // <li key={u.id}>{u.username}</li>;
          })}
        </ul>
      </>
    );
  }
  componentDidMount() {
    const endpoint = "/users";

    axios
      .get(endpoint)
      .then(res => {
        console.log("user list", res.data);
        this.setState(() => ({ users: res.data.users }));
      })
      .catch(({ response }) => {
        console.log("user list error", response);
      });
  }
}

export default requiresAuth(UserList);
