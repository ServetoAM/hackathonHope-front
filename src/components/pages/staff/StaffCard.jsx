import React from 'react'
import './StaffCard.scss'
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
			<Link to={staff.discord}><li>DiscordIcon</li></Link>						
			<li><a href={staff.twitter} target="blank_">TwitterIcon</a></li>
				{/* 	<Link><li>{staff.facebook}</li></Link>
					<Link><li>{staff.instagram}</li></Link>
					<Link><li>{staff.tiktok}</li></Link>
					<Link><li>{staff.twitch}</li></Link> */}
			</ul>
			</div>
		</div>
	)
}

export default StaffCard
