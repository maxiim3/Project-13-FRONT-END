import {mockedCheckingAccount} from "../mocks/mockedCheckingTransactions"
import $transaction from "../shared/transaction.module.scss"
import $sro from "../shared/sro.module.scss"
import {capitalizeFirstLetter} from "../functions/capitalizeFirstLetter"
import React from "react"

export function TransactionRecordsPageHeader(props: {transactions: typeof mockedCheckingAccount}) {
	return (
		<header
			role={"heading"}
			className={$transaction.header}>
			<h2 className={$sro.screenReadersOnly}>${props.transactions.label} Inventory Page</h2>
			<p
				tabIndex={0}
				aria-description={"Number of transactions"}>
				Argent Bank (x{props.transactions.transactions.length})
			</p>

			<p
				tabIndex={0}
				aria-description={"Available Balance"}>
				${props.transactions.transactions.at(-1)!.balance}
			</p>

			<p>Available Balance : {capitalizeFirstLetter(props.transactions.label)} Account</p>
		</header>
	)
}