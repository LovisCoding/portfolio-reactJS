import React from "react";
import '../styles/Contact.css';
import emailjs from "@emailjs/browser";

function Contact() {
	const form = React.useRef();
	const	    [name, setName] = React.useState("");
	const	  [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");

	const handleChange = (e) => {
		if (e.target.name === "user_name") {
			setName(e.target.value);
		}
		if (e.target.name === "user_email") {
			setEmail(e.target.value);
		}
		if (e.target.name === "message") {
			setMessage(e.target.value);
		}
	}

	const sendEmail = (e) => {
		e.preventDefault();
		if (   e.target.user_name.value  === ""
			|| e.target.user_email.value === ""
			|| e.target.message.value    === ""   ) {
		alert("Veuillez remplir tous les champs");
		}
		else
		{
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_PUBLIC_KEY
				)
				.then(
					(result) => {
						console.log("message sent");
						setName   ("");
						setEmail  ("");
						setMessage("");
						alert("Message envoyé");

					},
					(error) => {
						console.log(error.text);
					}
				);
			}
		}


	return (
		<div className="contact" id={'contact'}>
			<h1 className={'title'}>Contactez-moi</h1>
			<div className="container" >
				<div className="contact-form">
					<form ref={form} onSubmit={sendEmail}>
						<label>Nom</label>
						<input type="text" name="user_name" onChange={handleChange} value={name} />
						<label>E-mail</label>
						<input type="email" name="user_email" onChange={handleChange} value={email}/>
						<label>Message</label>
						<textarea name="message" onChange={handleChange} value={message} />
						<input type="submit" value="Send" />
					</form>
					</div>
			</div>
		</div>
	);
};




export default Contact;

