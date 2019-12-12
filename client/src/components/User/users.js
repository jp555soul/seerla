import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getUsers, deleteUser } from '../../store/actions/user'
import './users.css';

class Users extends Component {

  static defaultProps = {
    users: []
  }
  componentDidMount() {
    this.props.getUsers();
  }

  onDelete = id => {
    return (e) => this.props.deleteUser(id);
  };

  render() {

    const users = this.props.users.map(user => (
      <div key={`${user.id}`} className="col-md-4 mb-5">
        <div className="card h-100">
          <div className="card-body">
            <h2 className="card-title">{user.userName}</h2>
            <h3>{user.firstName} {user.lastName}</h3>
            <span>{user.userEmail}</span>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={this.onDelete(user.id)}>Delete</button>
          </div>
        </div>
      </div>
      )
    );

    return (
      <div>
        <h2>Users</h2>
        <div className="row">
          {users}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  removedUser: state.users.user
})

const dispatchToProps = (dispatch) => ({
   getUsers: () => dispatch(getUsers()),
   deleteUser: (id) => dispatch(deleteUser(id))
})

export default connect(mapStateToProps, dispatchToProps)(Users);
