import {T_AccountTransactions} from "./T_AccountTransactions"

/**
 * # createTransaction
 * @description Create a transaction object
 * @param {T_AccountTransactions} props
 * @return {{date: Date, transactionType: string, amount: number, notes: string | undefined, balance: number, description: string, category: string | undefined, accountLabel: string}}
 */
export const createTransaction = (props: T_AccountTransactions) => {
	const {accountBalance, accountTransactionsHistory, accountLabel} = props

	return {
		accountLabel: accountLabel,
		amount: accountTransactionsHistory.amount,
		balance: accountBalance - accountTransactionsHistory.amount,
		category: accountTransactionsHistory.category,
		date: accountTransactionsHistory.date,
		description: accountTransactionsHistory.description,
		notes: accountTransactionsHistory.notes,
		transactionType: accountTransactionsHistory.transactionType,
	}
}
