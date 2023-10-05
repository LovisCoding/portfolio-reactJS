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

return (
	<>

		<div className='nav-main-content'>
		<a className='hover-link' href='#'>Accueil</a>
		<a className='hover-link' href='#about'>A propos</a>
		<a className='hover-link' href='#work'>Projets</a>
		<a className='hover-link' href='#contact'>Contact</a>
		</div>
	</>
)
}


export default Header;