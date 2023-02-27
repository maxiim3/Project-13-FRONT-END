import {T_CheckingTransaction} from "./t_CheckingTransaction"
import {T_SavingTransaction} from "./t_SavingTransaction"
import {T_CreditTransaction} from "./t_CreditTransaction"


export type T_ListOfTransactions = Array<
	T_CheckingTransaction | T_SavingTransaction | T_CreditTransaction
>
