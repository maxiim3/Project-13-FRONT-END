import {useSelector} from "react-redux"
import {useMemo, useRef} from "react"
import {transactionsData} from "./mock/transactionsData"
import {useFilterByLabel} from "./useFilterByLabel"

export type T_Filtered = ReturnType<typeof useFilterByLabel>
export type T_BankAccount = {label: "checking" | "saving" | "credit"} & T_Filtered

// Handling the fetching of transactions data from API
// Setting and dispatching the data by category and type
export const useBankAccount = (): T_BankAccount[] => {
	const {user} = useSelector((state: any) => state.auth)
	const email = useRef(user.email)

	// todo here we can add the container for fetching the transactions from API

	const filterTransactionForCurrentUser = useMemo(
		() =>
			transactionsData.filter(({category, emitter_id_receiver_id}) =>
				emitter_id_receiver_id!.includes(email.current)
			),
		[]
	)

	let checkingTransactions: T_BankAccount = {
		label: "checking",
		...useFilterByLabel({
			email: email.current,
			transactions: filterTransactionForCurrentUser,
			label: "checking",
		}),
	}
	let creditTransactions: T_BankAccount = {
		label: "credit",
		...useFilterByLabel({
			email: email.current,
			transactions: filterTransactionForCurrentUser,
			label: "credit",
		}),
	}
	let savingTransactions: T_BankAccount = {
		label: "saving",
		...useFilterByLabel({
			email: email.current,
			transactions: filterTransactionForCurrentUser,
			label: "saving",
		}),
	}
	return useMemo(
		() => [checkingTransactions, creditTransactions, savingTransactions],
		[checkingTransactions, savingTransactions, creditTransactions]
	)
}
