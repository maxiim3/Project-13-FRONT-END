import React from "react"
import $features from "./features.module.css"

type TItems = {
	title: string
	description: string
	icon: string
}
export default ({title, description, icon}: TItems) => (
	<div
		className={$features.items}
		aria-description={title}
		tabIndex={0}
		aria-label={"Our values"}>
		<img
			src={`/img/icon-${icon.toLowerCase()}.png`}
			alt={`${icon} Icon`}
		/>
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
)

// todo Add Proptypes
