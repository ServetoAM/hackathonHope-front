import React from 'react'
import './Navbar.scss'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_Hope_ESport_format_PNG.png'

function Navbar() {
	return (
		<div className="navbar" >
			<div className="text-style1">
				<Link to="/" className="button">Accueil</Link>
				<Link to="/web-tv" className="button">Web TV</Link>
				<Link to="/equipe" className="button">Équipe Hearthstone</Link>
			</div>
					<span className="polygon">
						<img className="logo" src={logo} alt="Logo Hope" />
					</span>
			<div className="text-style2">
				<Link className="button">Tournois</Link>
				<Link className="button">L'association</Link>
				<Link className="button">Contact</Link>
			</div>
			
		</div>
	)
}

export default Navbar
