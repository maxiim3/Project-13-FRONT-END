import {fakeSavingTransactionRecords} from "./fakeSavingTransactionRecords"
import {fakeCreditTransactionRecords} from "./mockedCreditAccount"
import {fakeCheckingTransactionRecords} from "./mockedCheckingTransactions"

/**
 * # fakeTransactionsStore
 * @description Fetch Data from the API at the future routes : (May change):
 *
 * 	- /api/v2/user/transactions/
 *
 *  Store them into the redux store
 * @return {{savingAccount: {label: string, transactions: Transaction[]}, creditAccount: {label: string, transactions: Transaction[]}, checkingAccount: {label: string, transactions: Transaction[]}}}
 */
export function fakeTransactionsStore() {
	return {
		checkingAccount: fakeCheckingTransactionRecords,
		creditAccount: fakeCreditTransactionRecords,
		savingAccount: fakeSavingTransactionRecords,
	}
}
