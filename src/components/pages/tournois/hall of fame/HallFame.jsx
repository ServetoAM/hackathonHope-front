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
                        <li>2. Player 2</li>
                        <li>3. Player 3</li>
                        <li>4. Player 4</li>
                        <li>5. Player 5</li>
                        <li>6. Player 6</li>
                        <li>7. Player 7</li>
                        <li>8. Player 8</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HallFame
