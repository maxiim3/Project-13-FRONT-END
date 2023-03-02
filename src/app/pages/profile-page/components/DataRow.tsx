import {T_CheckingTransaction} from "../mock/t_CheckingTransaction"
import {T_SavingTransaction} from "../mock/t_SavingTransaction"
import {T_CreditTransaction} from "../mock/t_CreditTransaction"
import $table from "./transactionTable.module.scss"
import React from "react"

type T_DataRowProps = {
	transaction: T_CheckingTransaction | T_SavingTransaction | T_CreditTransaction
}

export function DataRow({transaction}: T_DataRowProps) {
	const {
		transaction_emitter,
		transaction_receiver,
		date_emitted_received,
		amount,
		category,
		transaction_type,
	} = transaction

	return (
		<tr
			className={$table.row}
			aria-description={transaction_type}>
			<td>{date_emitted_received![1]}</td>
			<td>$ {amount}</td>
			<td>{transaction_type}</td>
			<td>{transaction_receiver || transaction_emitter}</td>
			<td>{category}</td>
		</tr>
	)
}
