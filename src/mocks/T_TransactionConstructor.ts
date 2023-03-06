import {createTransaction} from "./createTransaction"

export type T_TransactionConstructor = ReturnType<typeof createTransaction>
