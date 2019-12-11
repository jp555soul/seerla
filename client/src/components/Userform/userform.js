import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userFormActions } from '../../store/actions/userform'
import './userform.css'

class Userform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                password: '',
                userEmail: ''
            },
            submitted: false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.userName && user.password && user.userEmail) {
            this.props.form(user);
        }
    }

    render() {
        const { userform  } = this.props;
        const { user, submitted } = this.state;
        return (
	      <div className="bd-example">
	        <h2>Sign-up</h2>
	        <form onSubmit={this.onSubmit}>
	          <div className="form-group">
	            <label htmlFor="firstName">First Name </label>
	            <input 
	              type="text" 
	              name="firstName" 
	              id="firstName" 
	              className="input-box" 
	              placeholder="eg. Adam" 
	              maxLength="100" 
	              required 
	              value={user.firstName}
	              onChange={this.onChange}/>
	             {submitted && !user.firstName &&
                        <div className="help-block">First Name is required</div>
                    }
	          </div>
	          <div className="form-group">
	            <label htmlFor="lastName">Last Name </label>
	            <input 
	              type="text" 
	              name="lastName" 
	              id="lastName" 
	              className="input-box" 
	              placeholder="eg. Silver" 
	              maxLength="100" 
	              required 
	              value={user.lastName}
	              onChange={this.onChange}/>
	              {submitted && !user.lastName &&
                        <div className="help-block">Last Name is required</div>
                    }
	          </div>
	          <div className="form-group">
	            <label htmlFor="password">Password </label>
	            <input 
	              type="password" 
	              name="password" 
	              id="password" 
	              className="input-box"  
	              maxLength="100"
	              required
	              value={user.password}
	              onChange={this.onChange}/>
	              {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
	          </div>
	          <div className="form-group">
	            <label htmlFor="userName">Username </label>
	            <input 
	              type="text" 
	              name="userName" 
	              id="userName" 
	              className="input-box" 
	              placeholder="eg. AdamSilver" 
	              maxLength="100"
	              required
	              value={user.userName}
	              onChange={this.onChange}/>
	              {submitted && !user.userName &&
                        <div className="help-block">Username is required</div>
                    }
	          </div>
	          <div className="form-group">
	            <label htmlFor="budget">Contact Email </label>
	            <input 
	              type="email" 
	              name="userEmail" 
	              id="userEmail" 
	              className="input-box" 
	              placeholder="Enter an email" 
	              required 
	              value={user.userEmail}
	              onChange={this.onChange} />
	              {submitted && !user.userEmail &&
                        <div className="help-block">E-mail is required</div>
                    }
	          </div>
	          <div className="form-group">
                    <button className="btn btn-primary">Sign-up</button>
                    {userform && 
                        <img alt='signup' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                </div>
	        </form>
	      </div>
	    );
    }
}

function mapState(state) {
    const { userform } = state.userform;
    return { userform };
}

const dispatchToProps = {
    form: userFormActions.form
}

export default connect(mapState, dispatchToProps)(Userform);