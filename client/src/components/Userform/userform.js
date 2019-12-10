import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import {userForm} from '../../store/actions/userform'
import './userform.css';

class Userform extends Component {

  static propTypes = {
    userForm: PropTypes.func.isRequired
  }

  static defaultProps = {
    firstName: '',
    lastName: '',
    password:'',
    userName:'',
    userEmail:''
  }

  componentDidMount() {
    this.props.userForm();
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      userName: '',
      userEmail: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      userName: this.state.userName,
      userEmail: this.state.userEmail
    };

    this.props.userForm(user);

  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <div className="bd-example">
        <h2>Userform</h2>
        <form onSubmit={this.onSubmit}  method="POST">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              name="firstName" 
              id="firstName" 
              className="input-box" 
              placeholder="eg. Adam" 
              maxLength="100" 
              required 
              value={this.state.firstName}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              id="lastName" 
              className="input-box" 
              placeholder="eg. Silver" 
              maxLength="100" 
              required 
              value={this.state.lastName}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="input-box"  
              maxLength="100"
              required
              value={this.state.password}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input 
              type="text" 
              name="userName" 
              id="userName" 
              className="input-box" 
              placeholder="eg. AdamSilver" 
              maxLength="100"
              required
              value={this.state.userName}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="budget">Contact Email</label>
            <input 
              type="email" 
              name="userEmail" 
              id="userEmail" 
              className="input-box" 
              placeholder="Enter an email" 
              required 
              value={this.state.userEmail}
              onChange={this.onChange} />
          </div>
          <button type="submit" value="Add User" className="btn btn-primary">Add User</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userForm: state.userForm
})

const dispatchToProps = (dispatch) => ({
   userForm: () => dispatch(userForm())
})

export default connect(mapStateToProps, dispatchToProps)(Userform);
