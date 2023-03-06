import {T_TransactionConstructor} from "../mocks/T_TransactionConstructor"

/**
 * # Calculate Balance
 * @description Returns the balance of the last transaction in the array
 * @param {T_TransactionConstructor[]} transactions
 * @return {number}
 */
export function calculateBalance(transactions: T_TransactionConstructor[]) {
	return transactions.at(-1)!.balance
}
