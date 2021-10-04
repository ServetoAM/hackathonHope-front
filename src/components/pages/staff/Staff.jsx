import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StaffCard from '../staff/StaffCard'
import './Staff.scss'

function Staff() {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/staff')
        .then((res) => res.data)
        .then((data) => setStaff(data))
    }, [])


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