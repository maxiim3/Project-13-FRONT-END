import {T_ListOfTransactions} from "./mock/T_ListOfTransactions"

export type T_BankAccount = {
	label: string
	balance: number
	numberOfTransactions: number
	incomes: T_ListOfTransactions
	outcomes: T_ListOfTransactions
}