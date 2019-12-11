import React from 'react'

class Home extends React.Component {
	render(){
		return(
			<div className="row">
				<div className="col-md-6 mb-5 mx-auto mt-3">
					<div className="flex-md-row mb-4 h-md-250 ">
						<div className="card-body d-flex flex-column">
							<h1 className="mb-2">Seer Technical Assignment</h1>
							<div className="card-text mb-auto">
								<p className="text-left mt-3">Setup React/React Router and create 3 pages</p>
								<ol className="list-group">
									<li className="list-item-group text-left">Landing Page</li>
									<li className="list-item-group text-left">Verification Page</li>
									<li className="list-item-group text-left">Confirmation Page</li>
								</ol>
								<p className="text-left mt-3">LANDING PAGE will have a sign-up form consisting of the following fields:</p>
								<ol className="list-group">
									<li className="list-item-group text-left text-left">First Name</li>
									<li className="list-item-group text-left text-left">Username</li>
									<li className="list-item-group text-left text-left">Confirmation Page</li>
									<li className="list-item-group text-left text-left">Email</li>
									<li className="list-item-group text-left text-left">Password</li>
									<li className="list-item-group text-left text-left">Confirm Password</li>
								</ol>
								<p className="text-left mt-3">VERIFICATION PAGE will display the user's information and two options:</p>
								<ol className="list-group">
									<li className="list-item-group text-left">CORRECT INFORMATION</li>
									<li className="list-item-group text-left">CONFIRM</li>
								</ol>
								<p className="text-left">If a user confirms that the information is correct, save the information to a database (via a nodejs endpoint) and then take them to a simple confirmation page.</p>
								<p className="text-left">If a user clicks on 'correct the information' it will take them back to the home page, with displaying the information already entered.</p>
								<p className="text-left">CONFIRMATION PAGE (Just a simple confirmation page... nothing fancy).</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}
}

export default Home