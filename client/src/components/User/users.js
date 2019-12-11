import React, { Component } from 'react'
import { connect } from 'react-redux'

import { userActions } from '../../store/actions/user'
import './users.css';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onDelete = id => {
    this.props.deleteUser(id);
  };

  render() {

    console.log(this.props)
    const userslist = this.props.users.map((user, index) => (
      <div key={`${user.id}`} className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">{user.userName}</h2>
            <h3>{user.firstName} {user.lastName}</h3>
            <span>{user.userEmail}</span>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.onDelete.bind(this, user.id)}>Delete</button>
          </div>
        </div>
      </div>
      )
    );

    return (
      <div>
        <h2>Users</h2>
        <div className="row">
          {userslist}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('state:', state)
  const { userslist } = state.users;
  return { userslist };
}

const dispatchToProps = {
   getUsers: userActions.getUsers,
   deleteUser: userActions.deleteUser
}

export default connect(mapStateToProps, dispatchToProps)(Users);
