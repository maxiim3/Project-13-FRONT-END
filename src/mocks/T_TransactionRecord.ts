export type T_TransactionRecord = {

	id?: string
	date: Date
	description: string
	amount: number
	category?: string
	transactionType: string
	notes?: string
}