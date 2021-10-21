import React from 'react'
import './StaffCard.scss'
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok, FaTwitch, FaDiscord } from 'react-icons/fa'

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
					<li className={`${staff.twitter}` === "" ? 'empty' : 'full'}><a href={staff.twitter} target="blank_"><FaTwitter/></a></li>
					<li className={`${staff.twitch}` === "" ? 'empty' : 'full'}><a href={staff.twitch} target="blank_"><FaTwitch/></a></li>
					<li className={`${staff.instagram}` === "" ? 'empty' : 'full'}><a href={staff.instagram} target="blank_"><FaInstagram/></a></li>	
				</div>
			</ul>
			</div>
		</div>
	)
}

export default StaffCard
