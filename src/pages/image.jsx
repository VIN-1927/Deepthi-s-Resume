import React, { Component } from "react";
import CoverPage from '../assets/coverpage.png';

class Image extends Component {
	render() {
		const myStyle = {
			backgroundImage: `url(${CoverPage})`,
			height: "100vh",
			
			marginTop: "110px",
			fontSize: "10px",
			marginLeft:"300px",
		
			width:"1900px",
			backgroundRepeat: "no-repeat",
		};
		return (
			<div style={myStyle}>
				<h1></h1>
			</div>
		);
	}
}

export default Image;

