import React from 'react'
import './StaffCard.scss'
import { FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa'
import background_staff from "../../../assets/fond3.png"

function StaffCard({staff}) {
	return (
		<div className="card">
			<div className="card-style">
				<div className="top-container">
				<img className="background-card" src={background_staff} alt="background_staff_card" />
				<img className="staff-logo" alt={staff.staff_firstname} src={process.env.PUBLIC_URL +  staff.staff_name}/>
				</div>
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