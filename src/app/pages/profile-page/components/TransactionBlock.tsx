import React, {MouseEvent, useMemo, useRef} from "react"
import $style from "../profile.module.scss"
import {textToCamelCase} from "../../../../utils/textToCamelCase"
import {TransactionSumUp} from "./TransactionSumUp"
import {ButtonCTA} from "./ButtonCTA"
import {Modal} from "../../../containers/modal/Modal"
import {useModal} from "../../../containers/modal/useModal"
import {capitalizeFirstLetter} from "../../../../utils/capitalizeFirstLetter"
import {T_CheckingTransaction} from "../mock/t_CheckingTransaction"
import {T_SavingTransaction} from "../mock/t_SavingTransaction"
import {T_CreditTransaction} from "../mock/t_CreditTransaction"
import {T_BankAccount} from "../T_BankAccount"
import {T_ListOfTransactions} from "../mock/T_ListOfTransactions"
import {getRandomKey} from "../../../../utils/getRandomKey()"

type T_HeaderCellProps = {
	label: string
	onSort: (e: MouseEvent<HTMLButtonElement>) => void
}

function HeaderCell({label, onSort}: T_HeaderCellProps) {
	return (
		<th
			scope={"col"}
			aria-sort="none">
			<button onClick={onSort}>{label}</button>
		</th>
	)
}

type T_DataRowProps = {
	transaction: T_CheckingTransaction | T_SavingTransaction | T_CreditTransaction
}

function DataRow({transaction}: T_DataRowProps) {
	const {
		transaction_emitter,
		transaction_receiver,
		date_emitted_received,
		amount,
		category,
		transaction_type,
	} = transaction

	return (
		<tr>
			<td>{date_emitted_received![1]}</td>
			<td>${amount}</td>
			<td>{transaction_receiver || transaction_emitter}</td>
			<td>{transaction_type}</td>
			<td>{category}</td>
		</tr>
	)
}

function TableOfTransactions({title, transactions}: {title: string; transactions: T_BankAccount}) {
	const concatTransactionData: T_ListOfTransactions = useMemo(
		() => [...transactions.incomes, ...transactions.outcomes],
		[transactions.incomes, transactions.outcomes]
	)
	console.log(concatTransactionData)
	const headersLabels = useRef(["Date", "Amount", "From/To", "Type", "Category"]).current
	const handleSort = (e: MouseEvent<HTMLButtonElement>) => {
		// add aria-pressed to true
		// add aria-sorted by :asc" | "desc"
		const label = e.currentTarget.innerText
		console.log("i'm clicked : ", label)
	}

	return (
		<table aria-describedby={"caption"}>
			<caption id={"caption"}>{title} transactions.</caption>
			<thead>
				<tr>
					{headersLabels.map(headersLabel => (
						<HeaderCell
							key={getRandomKey()}
							label={headersLabel}
							onSort={handleSort}
						/>
					))}
				</tr>
			</thead>
			<tbody>
				{concatTransactionData.map(transaction => (
					<DataRow
						key={getRandomKey()}
						transaction={transaction}
					/>
				))}
			</tbody>
		</table>
	)
}

export function TransactionBlock(transactions: T_BankAccount) {
	const id = textToCamelCase(transactions.label)
	const {modalRef, closeModal, openModal} = useModal()
	const title = useRef(capitalizeFirstLetter(transactions.label)).current
	// todo add accessibility
	return (
		<article
			key={getRandomKey()}
			className={$style.transactionWrapper}
			aria-label={title}>
			<TransactionSumUp
				id={id}
				label={transactions.label}
				numberOfTransactions={transactions.numberOfTransactions}
				balance={transactions.balance}
			/>
			<ButtonCTA onOpen={openModal} />
			<Modal
				modalRef={modalRef}
				onClose={closeModal}>
				<TableOfTransactions
					title={title}
					transactions={transactions}
				/>
			</Modal>
		</article>
	)
}
