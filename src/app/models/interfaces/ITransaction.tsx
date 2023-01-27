export default interface ITransaction {
	amount: number
	date: Date
	type: "deposit" | "withdrawal"
}

