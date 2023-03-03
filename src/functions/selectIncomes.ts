import {T_ListOfTransactions} from "../components/transactions/mock/T_ListOfTransactions"

export const selectIncomes = (transactions: T_ListOfTransactions, email: string) => {
	return transactions.filter(transaction => {
		transaction.transaction_type = "income"

		return transaction.emitter_id_receiver_id![1] === email
	})
}

