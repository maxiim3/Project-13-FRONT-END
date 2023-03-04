import {useStoreState} from "./useStoreState"
import {useMemo} from "react"
import {useParams} from "react-router-dom"
import {fakeInventoryStore} from "../mocks/fakeInventoryStore"

export const UseInventoryPage = () => {
	// Get the state from the Store
	const {isConnected, user, navigate} = useStoreState()
	// Object Destructuring : Getting firstname and lastname from user (Store)
	const {lastName, firstName} = useMemo(() => {
		return user
	}, [user])

	const inventory = fakeInventoryStore()
	let transactions
	const params = useParams()
	if (!params.account) {
		transactions = null
	} else {
		switch (params.account) {
			case "checking":
				transactions = inventory.checkingAccount
				break
			case "saving":
				transactions = inventory.savingAccount
				break
			case "credit":
				transactions = inventory.creditAccount
				break
			default:
				transactions = null
				break
		}
	}

	return {
		isConnected,
		navigate,
		transactions: transactions,
	} as {
		isConnected: boolean
		navigate: any
		transactions: typeof inventory.checkingAccount | null
	}
}
