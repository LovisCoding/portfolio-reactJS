import React from "react";
import {soloProjects} from "./WorkCards";
import { AiFillGithub, AiOutlineExpand } from "react-icons/ai";

import '../styles/Work.css';

function Work() {
	return (
		<div className="work" id="work">
			<h1 className="title">Mes Projets</h1>
			<div className="container_centered">
			<div className="portfolio__container">
				{soloProjects.map((pro) => (
					<article className="portfolio__item" key={pro.id}>
						<div className="portfolio__item-image">
							<img src={pro.img} alt={pro.title} />
						</div>
						<div className="portfolio__item-content">
							<h3>{pro.title}</h3>
							<p>{pro.description}</p>
							<p>{pro.technologies}</p>
						</div>
						<div className="portfolio__item-cta">
							<a
								href={pro.github}
								target="_blank"
								className="btn"
								rel="noreferrer"
							>
								<AiFillGithub/>
							</a>
							{pro.link !== "" &&
								<a

									href={pro.link}
									target="_blank"
									className="btn btn-primary"
									rel="noreferrer"
								>
									<AiOutlineExpand/>
								</a>

							}

						</div>
					</article>
				))}
			</div>
			</div>
		</div>

	);
};




export default Work