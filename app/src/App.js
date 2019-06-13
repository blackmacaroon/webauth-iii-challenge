import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import UserList from './components/UserList';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <button onClick={this.logout}>I'm done here.</button>
          </nav>
        </header>
        <main>
          <Route path='/users' component={UserList}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }
}

export default withRouter(App);
