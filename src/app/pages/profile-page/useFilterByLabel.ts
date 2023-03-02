import {useMemo} from "react"
import {calculateBalance} from "./calculateBalance"
import {T_AllTypeOfTransactions, T_ListOfTransactions} from "./mock/T_ListOfTransactions"

export type T_useFilterTransactions = {
	email: string
	transactions: T_ListOfTransactions
	label: "credit" | "saving" | "checking"
}
// Filtering the transactions by Label ("checking" | "saving" | "credit")
export const useFilterByLabel = ({email, transactions, label}: T_useFilterTransactions) =>
	useMemo(() => {
		const incomeTransactions: T_AllTypeOfTransactions[] = []
		const outcomeTransactions: T_AllTypeOfTransactions[] = []

		// filter each transactions
		transactions
			.filter(({category}) => category === label)
			.forEach((transaction: T_AllTypeOfTransactions) => {
				const [emitterMail, receiverMail]: string[] = transaction.emitter_id_receiver_id!
				// const index = transaction.emitter_id_receiver_id!.indexOf(email)
				if (email === emitterMail) {
					// Outcome Transaction
					transaction.transaction_type = "outcome"
					transaction.amount = transaction.amount * -1
					transaction.transaction_receiver = receiverMail
					transaction.transaction_emitter = null
					outcomeTransactions.push(transaction)
				}
				if (email === receiverMail) {
					// Income Transaction
					transaction.transaction_type = "income"
					transaction.transaction_emitter = emitterMail
					transaction.transaction_receiver = null
					incomeTransactions.push(transaction)
				}
			})

		const balance = calculateBalance(incomeTransactions, outcomeTransactions)
		return {
			clientMail: email,
			incomes: incomeTransactions,
			outcomes: outcomeTransactions,
			balance: balance,
			numberOfTransactions: incomeTransactions.length + outcomeTransactions.length,
		}
	}, [transactions])
