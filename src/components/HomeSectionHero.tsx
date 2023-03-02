import $hero from "../shared/homeSectionHero.module.css"
import $sro from "../shared/sro.module.scss"
import React from "react"

export default () => {
	return (
		<section className={$hero.hero}>
			<aside
				data-selector={"cta"}
				tabIndex={0}
				role={"cta"}
				aria-description={"Promoted Content"}
				aria-label={"Presentation"}>
				<h2 className={$sro.screenReadersOnly}>Promoted Content</h2>
				<p data-selector="subtitle">No fees.</p>
				<p data-selector="subtitle">No minimum deposit.</p>
				<p data-selector="subtitle">High interest rates.</p>
				<p data-selector="text">Open a savings account with Argent Bank today!</p>
			</aside>
		</section>
	)
}
