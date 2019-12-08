import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getUsers} from '../../store/actions/user'
import './users.css';

class Users extends Component {

  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  }

  static defaultProps = {
    users: []
  }

  componentWillMount() {
    this.props.getUsers();
  }

  render() {

    return (
      <div>
        <h2>Users</h2>
        <ul>
        {this.props.users.map(users =>
          //<li key={users.id}>{users.firstName} {users.lastName}</li>
          <li key={users.id}>
            <h3>{users.title}</h3>
          </li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
})

const dispatchToProps = (dispatch) => ({
   getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, dispatchToProps)(Users);
