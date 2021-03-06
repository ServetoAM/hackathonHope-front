import React from 'react'
import './Navbar.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo_Hope_ESport_format_PNG.png'

function Navbar() {
	return (
		<div className="navbar">
			<div className="text-style1">
				<Link to="/" className="button1 from-right" exact activeClassName="active">Accueil</Link>
				<Link to="/web-tv" className="button1 from-right" activeClassName="active">Web TV</Link>
				<Link to="/boutique" className="nav-listItem button1 from-right">Boutique</Link>
			</div>
			<Link to="/" className="container-logo">
				<img className="logo" src={logo} alt="Logo Hope" />
			</Link>
			<div className="text-style1">
				<Link className="button2" to="/news">News</Link>
				<div className="nav-listItem button2">L'association<IoIosArrowDown className="arrow"/>
					<ul  className="nav-listItemDrop">
					<Link className="text-decoration" to="/equipe"><li className="button3">Équipe</li></Link>
					<Link className="text-decoration" to="/staff"><li className="button3">Staff</li></Link>
					<Link className="text-decoration" to="/a-propos"><li className="button3">À propos</li></Link>
					</ul>
				</div>
				<Link className="button2" to="/contact">Contact</Link>
			</div>
		</div>
	)
}

export default Navbar