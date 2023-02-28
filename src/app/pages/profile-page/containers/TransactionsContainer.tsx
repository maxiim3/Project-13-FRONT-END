import React from "react"
import $sro from "../../../stylesheet/sro.module.scss"
import {useBankAccount} from "../useBankAccount"
import {getRandomKey} from "../../../../utils/getRandomKey()"
import {TransactionBlock} from "../components/TransactionBlock"

export function TransactionsContainer() {

	const transactions = useBankAccount() // get list of transactions for checking, savings and credit
	return (
		<>
			<h2 className={$sro.screenReadersOnly}>Accounts</h2>

			{transactions.map(transaction => (
				<TransactionBlock
					key={getRandomKey()}
					{...transaction}
				/>
			))}
		</>
	)
}
