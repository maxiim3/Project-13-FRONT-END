import React from "react"

export function TransactionSumUp(props: {
	id: string
	label: string
	numberOfTransactions: number
	balance: number
}) {
	return (
		<div
			id={props.id}
			data-selector={"content"}>
			<h3>
				Argent Bank {props.label} ({props.numberOfTransactions})
			</h3>
			<p>{props.balance}</p>
			<p>Available Balance</p>
		</div>
	)
}