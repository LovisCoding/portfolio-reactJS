import React from "react";
import '../styles/Home.css';
import Typed from "react-typed";
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";

const Home = () => {
	return(
		<>
		<div className="home">
			<h1 ><span className={'name'}>Arthur</span> Lecomte</h1>
				<h2 className="text-slider">
					<Typed
						strings={[
							"Développeur Front-end",
							"Développeur Back-end",
							"Développeur Full Stack",
						]}
						typeSpeed={80}
						backDelay={1100}
						backSpeed={40}
						loop
					/>
				</h2>
		</div>
		<div className="socials">
			<a href="https://github.com/LovisCoding" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
			<a href="https://www.linkedin.com/in/arthur-lecomte-44354923b/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
		</div>

		</>

	)

}
export default Home;