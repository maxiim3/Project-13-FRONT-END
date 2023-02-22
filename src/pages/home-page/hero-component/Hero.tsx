import $hero from "./hero.module.css"
import $shared from "../../../sass/shared.module.css"
import React from "react"

export default () => (
	<section className={$hero.hero}>
		<article data-selector={"content"}>
			<h2 className={$shared.screenReadersOnly}>Promoted Content</h2>
			<p data-selector="subtitle">No fees.</p>
			<p data-selector="subtitle">No minimum deposit.</p>
			<p data-selector="subtitle">High interest rates.</p>
			<p data-selector="text">Open a savings account with Argent Bank today!</p>
		</article>
	</section>
)
