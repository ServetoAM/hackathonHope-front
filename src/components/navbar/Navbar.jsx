import React from 'react'
import './Navbar.scss'
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_Hope_ESport_format_PNG.png'

function Navbar() {
	return (
		<div className="navbar" >
			<div className="text-style1">

				<Link to="/" className="button1">Accueil</Link>
				<Link to="/web-tv" className="button1">Web TV</Link>

			<div className="nav-listItem button1">Tournois
					<ul  className="nav-listItemDrop">
					<Link className="text-decoration" to="/brackets"><li className="button3">Brackets</li></Link>
					<Link className="text-decoration" to="/hall-of-fame"><li className="button3">Hall of fame</li></Link>
						</ul>
				</div>

			</div>
					<span className="polygon">
						<img className="logo" src={logo} alt="Logo Hope" />
					</span>
			<div className="text-style2">

				<Link className="button2" to="/equipe">Équipe</Link>
				<div className="nav-listItem button2">L'association
					<ul  className="nav-listItemDrop">
					<Link className="text-decoration" to="/a-propos"><li className="button3">A propos</li></Link>
					<Link className="text-decoration" to="/staff"><li className="button3">Staff</li></Link>
						</ul>
				</div>
				<Link className="button2">Contact</Link>
			</div>
		</div>
	)
}

export default Navbar
