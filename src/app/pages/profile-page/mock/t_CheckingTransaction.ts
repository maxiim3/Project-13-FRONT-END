import {T_Transaction} from "./t_Transaction"

export interface T_CheckingTransaction extends T_Transaction {
	category: "checking"
}