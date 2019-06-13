import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth';

class UserList extends React.Component {
      state = {
            users: []
      };

      render() {
            return (
                  
                  <>
                  {console.log(this.state.users)}
                  <h2>User List</h2>
                  <ul>
                        {this.state.users.map(u => {
                              <li key={u.id}>{u.username}</li>
                        })}
                  </ul>
                  </>
            )
      }
      componentDidMount() {
            const endpoint = 'http://localhost:5000/api/users';

            axios
                  .get(endpoint)
                  .then(res => {
                        console.log('user list', res.data)
                        this.setState(() => ({ users: res.data.users }));
                  })
                  .catch(({ response }) => {
                        console.log('user list error', response)
                  })
      }
}

export default requiresAuth(UserList);