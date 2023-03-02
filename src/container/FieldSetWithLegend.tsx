import React from "react"

type FiledSetWithLegendProps = {
	children: React.ReactNode
	legend?: string

	appliedClass?: string
}

export const FieldSetWithLegend = ({children, legend, appliedClass}: FiledSetWithLegendProps) => (
	<fieldset className={appliedClass}>
		<legend>{legend}</legend>
		{children}
	</fieldset>
)
