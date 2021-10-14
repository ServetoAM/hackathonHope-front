import React from 'react';
import './HallFame.css';
import bannertournoi from '../../../../assets/bannertournoi.jpg'

function HallFame() {
    return (
        <div className="hallOfFame">
            <h1>Hall of Fame</h1>
            <div className="tableauHallOfFame">
            <img className="bannière" src={bannertournoi} alt="bannière tournoi"/>
                <div className="gagnant">
                    <h2>👑 Winner</h2>
                </div>
                <div className="leaderboard">
                    <ul>
                        <li>2. Player A</li>
                        <li>3. Player B</li>
                        <li>4. Player C</li>
                        <li>5. Player D</li>
                        <li>6. Player E</li>
                        <li>7. Player F</li>
                        <li>8. Player G</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HallFame
