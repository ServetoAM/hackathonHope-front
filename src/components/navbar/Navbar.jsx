import React from 'react'
import './Navbar.scss'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import logo from '../../assets/Logo_Hope_ESport_format_PNG.png'

function Navbar() {
	return (
		<div className="navbar" >
			<div className="text-style1">
				<li>Accueil</li>
				<li>Web TV</li>
				<li className="nav-listItem">Tournois
					<ul  className="nav-listItemDrop">
						<li>Brackets</li>
						<li>Hall of fame</li>
						</ul>
				</li>
			</div>
					<span className="polygon">
						<img className="logo" src={logo} alt="Logo Hope" />
					</span>
			<div className="text-style2">
				<li>Équipe</li>
				<li className="nav-listItem">L'association
					<ul  className="nav-listItemDrop">
						<li>A propos</li>
						<li>Staff</li>
						</ul>
				</li>
				<li>Contact</li>
			</div>
			
		</div>
	)
}

export default Navbar
