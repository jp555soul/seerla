import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getUsers} from '../../store/actions/user'
import './userform.css';

class Userform extends Component {

  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.array
  }

  static defaultProps = {
    firstName: '',
    lastName: '',
    password:'',
    userName:'',
    userEmail:''
  }



  onChange(e){
    console.log(e);
    //this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <div>
        <h2>Userform</h2>
        <form>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" className="input-box" placeholder="eg. Adam" maxLength="100" required onChange={this.onChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="input-box" placeholder="eg. Silver" maxLength="100" onChange={this.onChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" className="input-box" placeholder="eg. ******" maxLength="100"  onChange={this.onChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input type="text" name="userName" id="userName" className="input-box" placeholder="eg. AdamSilver" maxLength="100"  onChange={this.onChange}/>
          </div>
          <div className="input-group">
            <label htmlFor="budget">Contact Email</label>
            <input type="email" name="userEmail" id="userEmail" className="input-box" placeholder="Enter an email" required onChange={this.onChange} />
          </div>
          <input type="submit" value="Add User" className="btn btn-reverse" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userform: state.userform
})

const dispatchToProps = (dispatch) => ({
   getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps, dispatchToProps)(Userform);
