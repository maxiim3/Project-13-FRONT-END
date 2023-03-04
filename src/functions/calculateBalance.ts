import {mockedCreditAccount} from "../mocks/mockedCreditAccount"

export function calculateBalance(account: typeof mockedCreditAccount) {
	return account.transactions.at(-1)!.balance
}
