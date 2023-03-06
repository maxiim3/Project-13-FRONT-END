import {useStoreState} from "./useStoreState"
import {useMemo} from "react"
import {useParams} from "react-router-dom"
import {fakeTransactionsStore} from "../mocks/fakeTransactionsStore"

export const useTransactionRecordsPage = () => {
	// Get the state from the Store
	const {isConnected, user, navigate} = useStoreState()
	// Object Destructuring : Getting firstname and lastname from user (Store)
	const {lastName, firstName} = useMemo(() => {
		return user
	}, [user])

	const transactionRecords = fakeTransactionsStore()
	let listOfTransactions

	const params = useParams()
	if (!params.account) {
		listOfTransactions = null
	}
	else {
		switch (params.account) {
			case "checking":
				listOfTransactions = transactionRecords.checkingAccount
				break
			case "saving":
				listOfTransactions = transactionRecords.savingAccount
				break
			case "credit":
				listOfTransactions = transactionRecords.creditAccount
				break
			default:
				listOfTransactions = null
				break
		}
	}

	return {
		isConnected,
		navigate,
		listOfTransactions,
	} as {
		isConnected: boolean
		navigate: any
		listOfTransactions: typeof transactionRecords.checkingAccount | null
	}
}
