import $transaction from "../sass/transaction.module.scss"
import $sro from "../sass/sro.module.scss"
import {TransactionItem} from "../components/TransactionItem"
import {getRandomKey} from "../functions/getRandomKey"
import React from "react"
import {T_TransactionConstructor} from "../mocks/T_TransactionConstructor"
import {ArrayOfTransactionRecordsProps} from "../types/ArrayOfTransactionRecordsProps"

/**
 * # TransactionRecordsPageTable
 * @description Transaction Records Page Table
 * @requires TransactionItem
 * @param {T_TransactionConstructor[]} transactions
 * @return {JSX.Element}
 * @constructor
 */
export function TransactionRecordsPageTable({
	transactions,
}: {
	transactions: T_TransactionConstructor[]
}) {
	return (
		<section
			role={"table"}
			tabIndex={0}
			aria-description={"In this table you will find all the related transactions"}
			className={$transaction.table}>
			<h2 className={$sro.screenReadersOnly}>Transactions</h2>
			<header>
				<span aria-hidden={"true"}></span>
				<ul role={"rowheader"}>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Date"}>
						DATE
					</li>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Description"}>
						DESCRIPTION
					</li>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Amount"}>
						AMOUNT
					</li>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Balance"}>
						BALANCE
					</li>
				</ul>
			</header>
			<main>
				{transactions
					.sort((a, b) => b.date.getUTCDate() - a.date.getUTCDate())
					.map(data => (
						<TransactionItem
							key={getRandomKey()}
							transaction={data}
						/>
					))}
			</main>
		</section>
	)
}

TransactionRecordsPageTable.propTypes = {
	transactions: ArrayOfTransactionRecordsProps,
}
