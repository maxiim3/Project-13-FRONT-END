import {useStoreState} from "./useStoreState"
import {useMemo, useState} from "react"
import {checkingAccount} from "../functions/transaction"

export const UseTransactionPage = () => {
	// Get the state from the Store
	const {isConnected, user, navigate} = useStoreState()
	// Object Destructuring : Getting firstname and lastname from user (Store)
	const {lastName, firstName} = useMemo(() => {
		return user
	}, [user])

	const transactions = checkingAccount

	return {isConnected, navigate, transactions}
}