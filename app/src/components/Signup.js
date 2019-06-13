import React from "react";
import axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    department: "",
    password: ""
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input
              value={this.state.department}
              onChange={this.handleChange}
              id="department"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </>
    );
  };

  handleSubmit = async event => {
    try {
      event.preventDefault();
      const endpoint = `/auth/register`;
      const registration = await axios.post(endpoint, this.state)
      if (registration) {
        this.setState({
          username: "",
          department: "",
          password: ""
        })
        this.props.history.push('/signin');
      }
    }
    catch (err) {
      console.error("registration failure", err);
    }
  };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

}

export default Register;