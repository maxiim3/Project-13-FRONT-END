export type Transaction = {
	date: Date
	description: string
	amount: number
	balance: number
	transactionType: string
	category?: string // Editable
	notes?: string // Editable
}

export function createTransaction(props: any): Transaction {
	const {transactionType, date, amount, balance, description} = props
	return {
		amount,
		balance: balance - amount,
		category: "",
		date,
		description,
		notes: "",
		transactionType,
	}
}