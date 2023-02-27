import React from "react"
import {T_Account} from "../../../types/T_Account"
import $profile from "../profile.module.scss"
import {textToCamelCase} from "../../../utils/textToCamelCase"

export function TransactionElement(account: T_Account) {
	const id = textToCamelCase(account.Label)

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
