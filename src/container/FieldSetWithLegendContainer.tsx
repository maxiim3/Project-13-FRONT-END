import React from "react"
import PropTypes from "prop-types"

type FiledSetWithLegendProps = {
	children: React.ReactNode | React.ReactNode[]
	legend?: string

	appliedClass?: string
}

/**
 * # FieldSetWithLegendContainer
 * @description A fieldset component to wrap them all || for accessibility and sr
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined | React.ReactNode[]} children
 * @param {string | undefined} legend
 * @param {string | undefined} appliedClass
 * @return {JSX.Element}
 */
export const FieldSetWithLegendContainer = ({children, legend, appliedClass}: FiledSetWithLegendProps) => (
	<fieldset className={appliedClass}>
		<legend>{legend}</legend>
		{children}
	</fieldset>
)

FieldSetWithLegendContainer.propTypes = {
	appliedClass: PropTypes.string,
	legend: PropTypes.string,
	children: PropTypes.node.isRequired,
}
