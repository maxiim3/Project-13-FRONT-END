import React, {useState} from "react"
import mockedTransactions from "../mockedTransactions.json"
import $sro from "../../../stylesheet/sro.module.scss"
import {TransactionItem} from "../components/TransactionItem"
import {getRandomKey} from "../../../../utils/getRandomKey()"

type T_Transaction = {
	Label: string
	balance: number
	numberOfTransactions: number
}

export function TransactionsContainer() {
	const [fetchedTransactions, setFetchedTransactions] =
		useState<Array<T_Transaction>>(mockedTransactions)
	return (
		<>
			<h2 className={$sro.screenReadersOnly}>Accounts</h2>

			{fetchedTransactions.map(transaction => (
				<TransactionItem
					key={getRandomKey()}
					{...transaction}
				/>
			))}
		</>
	)
}