import React from 'react'
import ReactTwitchEmbedVideo from "react-twitch-embed-video"
import './WebTV.scss'

function WebTV() {
	return (
		<div>
			<h2>Bienvenue sur la WebTV de la Hope ESport, structure française d’e-sport sur Hearthstone.</h2>
			<p>Vous voulez du tryhard, de la bonne humeur, de la convivialité ? C’est par ici ! Retrouvez nos joueurs passionnés, 
				 régulièrement dans le top Legend du ladder, en open cups, et dans les principaux tournois auxquels ils participent.
				 Retrouvez également des concepts originaux, tels que des showmatchs, un large panel de points de chaîne, et des subgoals croustillants !
			</p>
			<div className="twitch-embed">
			<ReactTwitchEmbedVideo channel="HopeEsportHS"
            onPlay={function noRefCheck(){}}
            onReady={function noRefCheck(){}}
            theme="dark"
            chat="default"
            width={"100%"}
            height={"100%"}
            collection={{}}
						/>
			</div>
		</div>
	)
}

export default WebTV
