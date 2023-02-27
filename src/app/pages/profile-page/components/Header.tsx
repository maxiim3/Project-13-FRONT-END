import React from "react"

export function Header(props: {firstName: string, lastName: string}) {
	return <h1>
		Welcome back
		<br />
		{props.firstName} {props.lastName}!
	</h1>
}