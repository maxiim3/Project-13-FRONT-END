import {mockedCheckingAccount} from "./mockedCheckingTransactions"
import {mockedCreditAccount} from "./mockedCreditAccount"
import {mockedSavingAccount} from "./mockedSavingTransactions"

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
		checkingAccount: mockedCheckingAccount,
		creditAccount: mockedCreditAccount,
		savingAccount: mockedSavingAccount,
	}
}
