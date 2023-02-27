import React from "react"

export const Label = (props: {id: string; label: string; value: string}) => (
	<label
		htmlFor={props.id}
		role={"label"}>
		{props.label}
	</label>
)
