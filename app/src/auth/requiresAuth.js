import React from "react";
import axios from "axios";

const token = localStorage.getItem("jwt");

axios.defaults.baseURL = "http://localhost:3000/api";

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const notLoggedIn = <div>That would require logging in.</div>;
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
