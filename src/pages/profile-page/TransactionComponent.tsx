import {useTextToCamelCase} from "../../hooks/UseTextToCamelCase"
import $profile from "./sass/profile.module.scss"
import React from "react"

export type T_Account = {
	Label: string
	balance: number
	numberOfTransactions: number
}

export function TransactionComponent(account: T_Account) {
	const id = useTextToCamelCase(account.Label)
	return (
		<section className={$profile.section}>
			<div
				id={id}
				data-selector={"content"}>
				<h3>
					Argent Bank {account.Label} ({account.numberOfTransactions})
				</h3>
				<p>{account.balance}</p>
				<p>Available Balance</p>
			</div>
			<div data-selector={"cta"}>
				<button>View transactions</button>
			</div>
		</section>
	)
}