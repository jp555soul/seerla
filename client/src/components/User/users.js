import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUsers, deleteUser } from '../../store/actions/user'
import './users.css';

class Users extends Component {

  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    addUser: PropTypes.object
  }

  static defaultProps = {
    users: []
  }

  componentDidMount() {
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.addUser) {
      this.props.users.unshift(nextProps.addUser);
    }
  }

  onDelete = id => {
    console.log('comp: ', id)
    this.props.deleteUser(id);
  };

  render() {
    const userList = this.props.users.map(user =>(
      <div key={user.id} className="col-md-4 mb-5">
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
      ));

    return (
      <div>
        <h2>Users</h2>
        <div className="row">
          {userList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  addUser: state.users.user
})

const dispatchToProps = (dispatch) => ({
   getUsers: () => dispatch(getUsers()),
   deleteUser: () => dispatch(deleteUser())
})

export default connect(mapStateToProps, dispatchToProps)(Users);
