import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffCard from '../staff/StaffCard'
import './Staff.scss'

function Staff() {
    const [staff, setStaff] = useState([
        {
            id: 1,
            staff_name: "/assets/ZKS.png",
            firstname: "Florian",
            age: "25 ans",
            position: "Gérant",
            discord: "[Hope] SKZ#0233",
            twitter: "https://twitter.com/SKZ_HS",
            facebook: "",
            instagram: "",
            tiktok: "",
            twitch: ""
        },
        {
            id: 3,
            staff_name: "/assets/Zary-1.png",
            firstname: "Jules",
            age: "20 ans",
            position: "Co-Gérant",
            discord: "[Hope] ZaryHs#6387",
            twitter: "https://twitter.com/zaryhs",
            facebook: null,
            instagram: null,
            tiktok: null,
            twitch: null
        },
        {
            id: 4,
            staff_name: "/assets/Ophtalmo.png",
            firstname: "Antoine",
            age: "23 ans",
            position: "Trésorier",
            discord: "[Hope] ophtalmo#3863",
            twitter: "https://twitter.com/ophtalmohs",
            facebook: null,
            instagram: null,
            tiktok: null,
            twitch: null
        },
        {
            id: 5,
            staff_name: "/assets/Magi.png",
            firstname: "Léo",
            age: "20 ans",
            position: "Responsable Évenementiel",
            discord: "[Hope] Magi#9264",
            twitter: "https://twitter.com/Magikh42",
            facebook: null,
            instagram: null,
            tiktok: null,
            twitch: null
        },
        {
            id: 6,
            staff_name: "/assets/Coolkid.png",
            firstname: "Martin",
            age: "30 ans",
            position: "Responsable Graphiste",
            discord: "[Hope] Coolkid#4154",
            twitter: "https://twitter.com/7coolkid7",
            facebook: null,
            instagram: "https://www.instagram.com/martin.mdesign11/",
            tiktok: null,
            twitch: "https://www.twitch.tv/7coolkid7"
        },
        {
            id: 7,
            staff_name: "/assets/Koulouff.png",
            firstname: "Rémi",
            age: "31 ans",
            position: "Responsable Marketing",
            discord: "[Hope] Koulouff#9420",
            twitter: "https://twitter.com/Hkoulouff",
            facebook: null,
            instagram: "https://www.instagram.com/koulouff/",
            tiktok: null,
            twitch: "https://www.twitch.tv/koulouff"
        }
    ]);

    // useEffect(() => {
    //     axios
    //     .get('http://localhost:8000/api/staff')
    //     .then((res) => res.data)
    //     .then((data) => setStaff(data))
    // }, [])


    return (
        <div className="Staff">
            {staff.map((staff) => (
                <div key={staff.id} className="staff">
                    <StaffCard staff={staff}/>
                </div>
            ))}
        </div>
    )
}

export default Staff