import React from 'react';
import { connect } from 'react-redux'
import { formData } from '../../store/actions/userform'

class Confirmation extends React.Component {

  	componentDidMount() {
    	this.props.formData();
    }
	
	constructor(props) {
        super(props);

        console.log(this.props);
    }

	render(){
		return(
			<div>
				<h1>Confirmed</h1>
				<div className="col-md-4 mb-5">
					Show form data
				</div>
				<button className="btn btn-primary">Correct information?</button>
				<br/>
				<button className="btn btn-primary mt-3">Confirm</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  formData: state
})


const dispatchToProps = (dispatch) => ({
   formData: () => dispatch(formData())
})


export default connect(mapStateToProps, dispatchToProps)(Confirmation);
