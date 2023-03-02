import {T_ListOfTransactions} from "./mock/T_ListOfTransactions"

export function calculateBalance(incomes: T_ListOfTransactions, outcomes: T_ListOfTransactions) {
	let totalIncomes = incomes
		.map(el => el.amount)
		.reduce((acc: number, value: number) => acc + value)
	let totalOutcomes = outcomes
		.map(el => el.amount)
		.reduce((acc: number, value: number) => acc + value)
	return totalIncomes - totalOutcomes
}