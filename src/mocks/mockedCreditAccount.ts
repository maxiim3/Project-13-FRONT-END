import {createTransaction} from "./createTransaction"
import {T_TransactionConstructor} from "./T_TransactionConstructor"

/**
 * # fakeCreditTransactionRecords
 * @description Mocked credit account transactions
 * @type {any[]}
 */
export let fakeCreditTransactionRecords: T_TransactionConstructor[] = []

//<editor-fold desc="Add to aray">

fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: Math.round(Math.random() * 10) * 3000 + 2000,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 50,
			date: new Date(2022, 6, 5),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 30,
			date: new Date(2022, 6, 7),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 40,
			date: new Date(2022, 6, 8),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 5,
			date: new Date(2022, 6, 9),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 12,
			date: new Date(2022, 6, 10),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 45,
			date: new Date(2022, 6, 11),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 29,
			date: new Date(2022, 6, 12),
			description: "Golden Sun Bakery",
		},
	})
)
fakeCreditTransactionRecords.push(
	createTransaction({
		accountLabel: "credit",
		accountBalance: fakeCreditTransactionRecords.at(-1)!.balance,
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 32,
			date: new Date(2022, 6, 13),
			description: "Golden Sun Bakery",
		},
	})
)

//</editor-fold>
