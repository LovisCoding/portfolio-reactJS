import React from "react";
import '../styles/About.css';
import Lottie from "lottie-react";
import Working from "../assets/animation.json";

function About() {
		return(

				<div className="about" id={'about'}>
					<h1 className={'title'}>A propos</h1>
					<div className="container" >
						<div className="up-container">
						<p>Bonjour, je m'appelle Arthur Lecomte,<br/> je suis passionné par l'informatique depuis
						le lycée, je suis actuellement en BUT2 Informatique et je suis à la recherche d'une alternance pour 2024.
						</p>
						<Lottie style={{minWidth: '30rem'}} loop={true} animationData={Working}/>
						</div>
						<a href={'https://drive.google.com/drive/folders/16IGrkss_Fj0hv7biXcTaty75046GfIz0?usp=sharing'} target={'_blank'} rel={'noopener noreferrer'} className={'cv'} >Télécharger mon CV</a>
					</div>

				</div>
		);
}




export default About;