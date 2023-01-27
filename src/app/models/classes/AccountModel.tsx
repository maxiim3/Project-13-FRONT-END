import ITransaction from "../interfaces/ITransaction"
import IAccount from "../interfaces/IAccount"

export default class AccountModel implements IAccount {
	balance: number
	transactions: ITransaction[]

	constructor(balance: number, transactions: ITransaction[]) {
		this.balance = balance
		this.transactions = transactions
	}
}