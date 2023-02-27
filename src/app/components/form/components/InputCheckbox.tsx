import React from "react"

export const InputCheckbox = (props: {
	id: string
	minLength: number
	value: string
	onChange: (e: any) => void
}) => (
	<input
		type="checkbox"
		id={props.id}
		onChange={props.onChange}
		minLength={props.minLength}
		value={props.value}
		role={"type"}
		aria-label={"Remember Me"}
		inputMode={"none"}
		autoComplete={"off"}
		aria-description={"Check this case to remember my login information on next connection"}
	/>
)
