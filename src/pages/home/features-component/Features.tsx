import $features from "./features.module.css"
import $shared from "../../../sass/shared.module.css"
import Items from "./Items"
import React from "react"
import {getRandomKey} from "../../../utils/getRandomKey()"

export default () => {
	return (
		<section className={$features.features}>
			<h2 className={$shared.screenReadersOnly}>Features</h2>
			<Items
				key={getRandomKey()}
				title={"You are our #1 priority"}
				description={"Need to talk to a representative? You can get in touch through our" +
							 "\t\t\t\t\t24/7 chat or through a phone call in less than 5 minutes."}
				icon={"Chat"}
			/>
			<Items
				key={getRandomKey()}
				title={"More savings means higher rates"}
				description={"The more you save with us, the higher your interest rate will be!"}
				icon={"Money"}
			/>
			<Items
				key={getRandomKey()}
				title={"Security you can trust"}
				description={"We use top of the line encryption to make sure your data and money\n" +
							 "\t\t\t\t\tis always safe."}
				icon={"Security"}
			/>

		</section>
	)
}