import {T_ListOfTransactions} from "../pages/profile-page/mock/T_ListOfTransactions"

export const selectOutcomes = (transactions: T_ListOfTransactions, email: string) => {
	return transactions.filter(transaction => {
		transaction.transaction_type = "outcome"

		return transaction.emitter_id_receiver_id![0] === email
	})
}
