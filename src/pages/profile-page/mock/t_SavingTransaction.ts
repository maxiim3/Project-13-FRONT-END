import {T_Transaction} from "./t_Transaction"

export interface T_SavingTransaction extends T_Transaction {
	category: "saving"
}