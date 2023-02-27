import React, {useMemo, useRef} from "react"
import $sro from "../../../stylesheet/sro.module.scss"
import {transactionsData} from "../mock/transactionsData"
import {useSelector} from "react-redux"
import {T_ListOfTransactions} from "../mock/T_ListOfTransactions"
import {T_Account} from "../../../types/T_Account"
import {getRandomKey} from "../../../../utils/getRandomKey()"
import {TransactionItem} from "../components/TransactionItem"

type T_Transaction = {
	label: string
	balance: number
	numberOfTransactions: number
}
export const useBakAccount = (
	email: string,
	transactions: T_ListOfTransactions,
	label: "credit" | "saving" | "checking"
) => useMemo(() => {
	const filter = transactions.filter(
		({transaction_type, emitter_id_receiver_id}) =>
			transaction_type === label && emitter_id_receiver_id!.includes(email)
	)
	const income = filter.filter(
		({emitter_id_receiver_id}) => emitter_id_receiver_id![1] === email
	) as T_ListOfTransactions
	const outcome = filter.filter(
		({emitter_id_receiver_id}) => emitter_id_receiver_id![0] === email
	) as T_ListOfTransactions
	const totalIncome = income
		.map(el => el.amount)
		.reduce((acc: number, value: number) => acc + value)
	const totalOutcome = outcome
		.map(el => el.amount)
		.reduce((acc: number, value: number) => acc + value)
	return {
		income,
		outcome,
		balance: totalIncome - totalOutcome,
		numberOfTransactions: filter.length,
	}
}, [transactions])

export function TransactionsContainer() {
	const {user} = useSelector(state => state.auth)
	const email = useRef(user.email)


	let checkingTransactions = useBakAccount(email.current, transactionsData, "checking")
	let creditTransactions = useBakAccount(email.current, transactionsData, "credit")
	let savingTransactions = useBakAccount(email.current, transactionsData, "saving")
	const transactionCollection: T_Account[] = useMemo(
		() => [
			{
				label: "checking",
				numberOfTransactions: checkingTransactions.numberOfTransactions,
				balance: checkingTransactions.balance,
				data: checkingTransactions
			},
			{
				label: "saving",
				numberOfTransactions: savingTransactions.numberOfTransactions,
				balance: savingTransactions.balance,
				data: savingTransactions
			},
			{
				label: "credit",
				numberOfTransactions: creditTransactions.numberOfTransactions,
				balance: creditTransactions.balance,
				data: creditTransactions
			},
		],
		[]
	)
	return (
		<>
			<h2 className={$sro.screenReadersOnly}>Accounts</h2>

			{transactionCollection.map(transaction => (
				<TransactionItem
					key={getRandomKey()}
					{...transaction}
				/>
			))}
		</>
	)
}
