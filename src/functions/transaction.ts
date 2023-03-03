export type Transaction = {
	date: Date
	description: string
	amount: number
	balance: number
	transactionType: string
	category?: string // Editable
	notes?: string // Editable
}
type Accounts = {
	checking: Transaction[]
	credit: Transaction[]
	saving: Transaction[]
}
export const dateToUSFormat = (date: Date) =>
	date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
export const initialBalance = 2080

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

export let checkingAccount: Transaction[] = []

checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: initialBalance,
		amount: 50,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 30,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 40,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 5,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 12,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 45,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 29,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
checkingAccount.push(
	createTransaction({
		transactionType: "Electronic",
		balance: checkingAccount[checkingAccount.length - 1].balance,
		amount: 32,
		date: new Date(2022, 7, 20),
		description: "Golden Sun Bakery",
	})
)
