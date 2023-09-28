import React from "react";
import '../styles/Header.css';

const Header = () => {
	return (
		<nav>
			<NavContent/>
		</nav>
	)
}


function NavContent() {

return <div className="navbar">

	<nav>
		<h2 className="name">Arthur <span>Lecomte</span></h2>
		<ul>
			<li><a href="/" onClick={handleCLick}>Home</a> </li>
			<li><a href="/">About</a> </li>
			<li><a href="/">Work</a> </li>
			<li><a href="/">Contact</a> </li>
		</ul>
	</nav>
</div>;
}

function handleCLick(e) {
	e.preventDefault();
	window.scrollTo({top :0});
}
export default Header;