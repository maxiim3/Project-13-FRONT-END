import $transaction from "../sass/transaction.module.scss"
import $sro from "../sass/sro.module.scss"
import {capitalizeFirstLetter} from "../functions/capitalizeFirstLetter"
import React from "react"
import {T_TransactionConstructor} from "../mocks/T_TransactionConstructor"
import {ArrayOfTransactionRecordsProps} from "../types/ArrayOfTransactionRecordsProps"

/**
 * # TransactionRecordsPageHeader
 * @description Transaction Records Page Header
 * @param {{transactions: T_TransactionConstructor[]}} props
 * @return {JSX.Element}
 * @constructor
 */
export function TransactionRecordsPageHeader(props: {transactions: T_TransactionConstructor[]}) {
	return (
		<header
			role={"heading"}
			className={$transaction.header}>
			<h2 className={$sro.screenReadersOnly}>
				${props.transactions.at(0)!.accountLabel} Inventory Page
			</h2>
			<p
				tabIndex={0}
				aria-description={"Number of transactions"}>
				Argent Bank (x{props.transactions.length})
			</p>

			<p
				tabIndex={0}
				aria-description={"Available Balance"}>
				${props.transactions.at(-1)!.balance}
			</p>

			<p>
				Available Balance : {capitalizeFirstLetter(props.transactions.at(0)!.accountLabel)}{" "}
				Account
			</p>
		</header>
	)
}

TransactionRecordsPageHeader.propTypes = {
	transactions: ArrayOfTransactionRecordsProps,
}
