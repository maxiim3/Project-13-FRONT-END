import React from "react"
import $features from "../shared/homeSectionFeatures.module.css"
import PropTypes from "prop-types"

/**
 * # HomePageFeaturedItem
 * @description This component is used to display the features of the bank in the Home Page
 * @param {string} title
 * @param {string} description
 * @param {string} icon
 * @return {JSX.Element}
 */
export const HomePageFeaturedItem = ({title, description, icon}: T_ItemProps) => (
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

HomePageFeaturedItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
}

type T_ItemProps = {
	title: string
	description: string
	icon: string
}
