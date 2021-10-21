import React from 'react'
import './error_page.scss'

function error_page() {
	return (
		<div className="main">
			<div className="main-container">
				<h1>404</h1>
				<h2>La page que vous recherchez n'existe pas.</h2>
				<p>Vous avez peut-être mal tapé l'adresse ou la page a peut-être changé.</p>
			</div>
		</div>
	)
}

export default error_page
