import React from "react"

export function ButtonCTA({onOpen}:{onOpen: () => void}) {
	return (
		<div data-selector={"cta"}>
			<button onClick={onOpen}>View transactions</button>
		</div>
	)
}