import {mockedCheckingAccount} from "./mockedCheckingTransactions"
import {mockedCreditAccount} from "./mockedCreditAccount"
import {mockedSavingAccount} from "./mockedSavingTransactions"

export function fakeInventoryStore() {
	return {
		checkingAccount: mockedCheckingAccount,
		creditAccount: mockedCreditAccount,
		savingAccount: mockedSavingAccount,
	}
}