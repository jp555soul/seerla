import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

class Nav extends Component {
	render(){
		return(
			<header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1"><Link className="text-muted" to="/admin">Admin</Link></div>
          <div className="col-4 text-center"><Link className="blog-header-logo text-dark" to="/"><img src={ logo } className="App-logo" alt="logo"/></Link></div>
          <div className="col-4 d-flex justify-content-end align-items-center"><Link className="btn btn-sm btn-outline-secondary" to="/signup">Sign up</Link></div>
        </div>
      </header>
		)
	}
}

export default Nav;