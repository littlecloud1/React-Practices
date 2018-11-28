import React from 'react'

const Validation = (props) => {
	let valid = false;
	if(props.length >= 5) {
		valid = true;
	}
	
	return(
		<div>
		 <p>
		   {!valid? "Text too short": "Text long enough"}
		</p>
		
		</div>
	
	)

};


export default Validation;