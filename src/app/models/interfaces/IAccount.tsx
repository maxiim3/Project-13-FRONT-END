import ITransaction from "./ITransaction"

export default interface IAccount {
	balance: number
	transactions: ITransaction[]
}
