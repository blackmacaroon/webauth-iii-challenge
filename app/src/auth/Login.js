import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
      state = {
            username: '',
            password: ''
      }

      render() {
            return(
                  <>
                  <h2>Login</h2>
                  <form onSubmit={this.handleSubmit}>
                        <div>
                              <label htmlFor="username">Username</label>
                              <input id="username" onChange={this.handleChange} value={this.state.username} type='text'></input>
                        </div>
                        <div>
                              <label htmlFor="password">Password</label>
                              <input id="username" onChange={this.handleChange} value={this.state.password} type='password'></input>
                        </div>
                        <div>
                              <button type='submit'>Here we go!</button>
                        </div>

                  </form>
                  </>
            )
      }

      handlehange = e => {
            //capture the values you want to change
            const { id, value } = e.target;
            this.setState({ [id]:value });
      }

      handleSubmit = e => {
            e.preventDefault();
            const endpoint = 'http://localhost:5000/api/auth/login';
            axios
                  .post(endpoint, this.state)
                  .then(res => {
                        console.log(res);
                        localStorage.setItem('jwt', res.data.token);
                        this.props.history.push('/users');
                  })
                  .catch(err => {
                        console.log('login failure', err)
                  })
      }
}