import React from "react";
import '../styles/About.css';
import Lottie from "lottie-react";
import Working from "../assets/animation.json";

function About() {
		return(

				<div className="about" id={'about'}>
					<h1 className={'title'}>About</h1>
					<div className="container" >
						<div className="text">
							<p>Bonjour</p>
						</div>
						<Lottie style={{width : '20%'}} loop={true} animationData={Working}/>
					</div>
					</div>
		);
}




export default About;