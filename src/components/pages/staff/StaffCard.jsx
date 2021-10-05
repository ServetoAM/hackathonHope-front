import React from 'react'
import './StaffCard.scss'
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaDiscord } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function StaffCard({staff}) {
	return (
		<div className="card">
			<div className="card-style">
				<img className="staff-logo" alt={staff.staff_firstname} src={process.env.PUBLIC_URL +  staff.staff_name}/>
			<ul>
				<li className="card-text-style">{staff.firstname}</li>
				<li className="card-text-style">{staff.age}</li>
		  	<li className="card-text-style">{staff.position}</li>
				<li className="card-text-style">Discord : {staff.discord}</li>			
				<div className="grid-social">	
					<li><a href={staff.twitter} target="blank_"><FaTwitter/></a></li>
					<li><a href={staff.facebook} target="blank_"><FaFacebookF/></a></li>
					<li><a href={staff.instagram} target="blank_"><FaInstagram/></a></li>
					<li><a href={staff.tiktok} target="blank_"><FaTiktok/></a></li>
					<li><a href={staff.twitch} target="blank_"><FaTwitch/></a></li>
				</div>
			</ul>
			</div>
		</div>
	)
}

export default StaffCard
