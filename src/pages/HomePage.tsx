import React from "react"
import {MainContainer} from "../container/MainContainer"
import $hero from "../shared/homeSectionHero.module.css"
import $sro from "../shared/sro.module.scss"
import $features from "../shared/homeSectionFeatures.module.css"
import {HomePageFeaturedItem} from "./HomePageFeaturedItem"
import {getRandomKey} from "../functions/getRandomKey"

/**
 * # HomePage
 * @description Home Page
 * @requires MainContainer
 * @requires HomePageFeaturedItem
 * @return {JSX.Element}
 */
export default () => (
	<MainContainer
		ariaLabel={"Home Page"}
		ariaDescription={"Welcome to Argent Bank! Open a savings account today!"}>
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
		<section className={$features.features}>
			<h2 className={$sro.screenReadersOnly}>Features</h2>
			<HomePageFeaturedItem
				key={getRandomKey()}
				title={"You are our #1 priority"}
				description={
					"Need to talk to a representative? You can get in touch through our" +
					"\t\t\t\t\t24/7 chat or through a phone call in less than 5 minutes."
				}
				icon={"Chat"}
			/>
			<HomePageFeaturedItem
				key={getRandomKey()}
				title={"More savings means higher rates"}
				description={"The more you save with us, the higher your interest rate will be!"}
				icon={"Money"}
			/>
			<HomePageFeaturedItem
				key={getRandomKey()}
				title={"Security you can trust"}
				description={
					"We use top of the line encryption to make sure your data and money\n" +
					"\t\t\t\t\tis always safe."
				}
				icon={"Security"}
			/>
		</section>
	</MainContainer>
)
