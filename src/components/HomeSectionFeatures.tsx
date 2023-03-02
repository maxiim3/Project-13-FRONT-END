import $features from "../shared/homeSectionFeatures.module.css"
import HomeFeaturedItem from "./HomeFeaturedItem"
import React from "react"
import {getRandomKey} from "../functions/getRandomKey()"
import $sro from "../shared/sro.module.scss"

export default () => {
	return (
		<section className={$features.features}>
			<h2 className={$sro.screenReadersOnly}>Features</h2>
			<HomeFeaturedItem
				key={getRandomKey()}
				title={"You are our #1 priority"}
				description={"Need to talk to a representative? You can get in touch through our" +
							 "\t\t\t\t\t24/7 chat or through a phone call in less than 5 minutes."}
				icon={"Chat"}
			/>
			<HomeFeaturedItem
				key={getRandomKey()}
				title={"More savings means higher rates"}
				description={"The more you save with us, the higher your interest rate will be!"}
				icon={"Money"}
			/>
			<HomeFeaturedItem
				key={getRandomKey()}
				title={"Security you can trust"}
				description={"We use top of the line encryption to make sure your data and money\n" +
							 "\t\t\t\t\tis always safe."}
				icon={"Security"}
			/>

		</section>
	)
}

// todo accessibilité focus for screen readers
// todo