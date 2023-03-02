import React from "react"
import $sro from "../../../stylesheet/sro.module.scss"
import {useBankAccount} from "../useBankAccount"
import {getRandomKey} from "../../../../utils/getRandomKey()"
import {TransactionWrapper} from "../components/TransactionWrapper"

export function TransactionsSection() {

	const transactions = useBankAccount() // get list of transactions for checking, savings and credit
	return (
		<>
			<h2 className={$sro.screenReadersOnly}>Accounts</h2>

			{transactions.map(transaction => (
				<TransactionWrapper
					key={getRandomKey()}
					{...transaction}
				/>
			))}
		</>
	)
}
