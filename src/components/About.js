import React from "react";
import '../styles/About.css';
import Lottie from "lottie-react";
import Working from "../assets/animation.json";
import CV from "../assets/CV.pdf";

function About() {
		return(

				<div className="about" id={'about'}>
					<h1 className={'title'}>A propos</h1>
					<div className="container" >
						<div className="up-container">
						<p>Bonjour, je m'appelle Arthur Lecomte,<br/> je suis passionné par l'informatique depuis
						le lycée,<br/> je suis actuellement en BUT2 Informatique <br/> et je suis à la recherche d'une alternance pour 2024.
						</p>
						<Lottie style={{width: '45%'}} loop={true} animationData={Working}/>
						</div>
						<a href={CV} target={'_blank'} rel={'noopener noreferrer'} className={'cv'} download>Télécharger mon CV</a>
					</div>

				</div>
		);
}




export default About;