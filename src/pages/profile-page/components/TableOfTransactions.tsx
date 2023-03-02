import {T_BankAccount} from "../T_BankAccount"
import {T_ListOfTransactions} from "../mock/T_ListOfTransactions"
import React, {MutableRefObject, useMemo, useRef} from "react"
import $table from "./transactionTable.module.scss"
import $sro from "../../../shared/sro.module.scss"
import {HeaderCell} from "./HeaderCell"
import {getRandomKey} from "../../../functions/getRandomKey()"
import {DataRow} from "./DataRow"

export function TableOfTransactions({title, transactions}: {title: string; transactions: T_BankAccount}) {
	const concatTransactionData: T_ListOfTransactions = useMemo(() => {
		return [...transactions.incomes, ...transactions.outcomes]
	}, [transactions.incomes, transactions.outcomes])

	const headerRow = useRef() as MutableRefObject<HTMLTableRowElement>
	const headersLabels = useRef(["Date", "Amount", "Type", "From/To", "Category"]).current

	return (
		<>
			<h3>{title} transactions</h3>
			<table
				aria-describedby={"caption"}
				className={$table.table}>
				<caption
					id={"caption"}
					className={$sro.screenReadersOnly}>
					{title} transactions
				</caption>

				<thead>
				<tr ref={headerRow}>
					{headersLabels.map(headersLabel => (
						<HeaderCell
							key={getRandomKey()}
							label={headersLabel}
						/>
					))}
				</tr>
				</thead>
				<tbody>
				{concatTransactionData
					.sort((prev, next) => {
						return (
							Date.parse(next.date_emitted_received[1]) -
							Date.parse(prev.date_emitted_received[1])
						)
					})
					.map(transaction => {
						return (
							<DataRow
								key={getRandomKey()}
								transaction={transaction}
							/>
						)
					})}
				</tbody>
			</table>
		</>
	)
}