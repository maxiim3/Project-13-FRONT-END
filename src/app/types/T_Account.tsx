import {T_ListOfTransactions} from "../pages/profile-page/mock/T_ListOfTransactions"
import {useBakAccount} from "../pages/profile-page/containers/TransactionsContainer"

export type T_Account = {
	label: string
	balance: number
	numberOfTransactions: number
	data: ReturnType<typeof useBakAccount>
}