import React from 'react'
import './StaffCard.scss'


function StaffCard({staff}) {
	return (
		<div>
			<img alt={staff.staff_firstname} src={process.env.PUBLIC_URL +  staff.staff_name}/>
			<ul>
				<li>{staff.firstname}</li>
				<li>{staff.age}</li>
				<li>{staff.position}</li>
				<li>{staff.discord}</li>							
				<li>{staff.twitter}</li>
				{/* <li>{staff.facebook}</li>
				<li>{staff.instagram}</li>
				<li>{staff.tiktok}</li>
				<li>{staff.twitch}</li> */}
			</ul>
		</div>
	)
}

export default StaffCard
