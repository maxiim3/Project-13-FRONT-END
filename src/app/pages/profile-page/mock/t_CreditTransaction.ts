import {T_Transaction} from "./t_Transaction"

export interface T_CreditTransaction extends T_Transaction {
	category: "credit"
}