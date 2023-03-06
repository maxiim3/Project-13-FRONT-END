import {T_TransactionRecord} from "./T_TransactionRecord"

export type T_AccountTransactions = {
	accountLabel: string
	accountBalance: number
	accountTransactionsHistory: T_TransactionRecord
}