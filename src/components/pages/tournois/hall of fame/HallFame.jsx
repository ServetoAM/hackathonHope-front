import React from 'react';
import './HallFame.css'

function HallFame() {
    return (
        <div className="hallOfFame">
            <h1>Hall of Fame</h1>
            <div className="tableauHallOfFame">
                <div className="gagnant">
                    <h2>👑 1. Winner</h2>
                </div>
                <div className="leaderboard">
                    <ul>
                        <li>2. Kirikou</li>
                        <li>3. Super Man</li>
                        <li>4. Flash</li>
                        <li>5. CR7</li>
                        <li>6. KB9</li>
                        <li>7. Arouff</li>
                        <li>8. Goku</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HallFame
