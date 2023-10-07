import IMG1 from "../assets/Trophee_NSI.webp";
import IMG2 from "../assets/Chat_Instantane.webp";
import IMG3 from "../assets/CinkeTerra.webp";
import IMG4 from "../assets/portfolio.webp";
import IMG5 from "../assets/QrCode.webp";



 export  const soloProjects = [
	{
		id: 1,
		title: "monCarbone.fr",
		img: IMG1,
		description:
			"Site créé pour les athlètes des Jeux Olympiques, il permet de calculer son empreinte carbone. " +
			"Ce projet a été récompensé au trophée NSI.",
		technologies: "HTML | CSS | JavaScript | NodeJs",
		link: "https://moncarbone.fr",
		github: "https://github.com/NodeGenius14/CarbonFootSprintV2Calculator",
	},
	{
		id: 2,
		title: "Chat Instantané",
		img: IMG2,
		description:
			"Projet Réseau de 1ère année, c'est un système de messagerie instantané. " +
			"Ce projet est ma première utilisation du JS et de NodeJs.",
		technologies: "HTML | CSS | NodeJs | Docker",
		link: "",
		github: "https://github.com/LovisCoding/Chat-Instantane-JS-Docker",
	},
	{
		id: 3,
		title: "Jeu CinkeTerra",
		img: IMG3,
		description: "Ce jeu est un projet de 1ère année codé en MVC. " +
			"On va chercher un document texte pour créer différentes îles.",
		technologies: "Java | Swing",
		link: "",
		github: "https://github.com/LovisCoding/SAE-2.01/tree/main",
	},
	 {
		 id: 4,
		 title: "Mon portfolio",
		 img: IMG4,
		 description:
			 "Ce site permet de montrer mon niveau actuel en Web et " +
			 "dans le but de trouver une alternance. Ce site représente ma première " +
			 "utilisation de ReactJS.",
		 technologies: "Html | CSS | ReactJS | NodeJs",
		 link: "https://arthurlecomte.fr",
		 github: "https://github.com/LovisCoding/portfolio-reactJS",
	 },

	{
		id: 5,
		title: "Générateur de QrCode",
		img: IMG5,
		description:
			"Ce site m'a permis de m'entraîner en JavaScript",
		technologies: "Html | CSS | JavaScript",
		link: "https://loviscoding.github.io/generateur-qrcode/",
		github: "https://github.com/LovisCoding/generateur-qrcode",
	},


];

