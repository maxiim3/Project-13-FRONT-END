import {createTransaction} from "./createTransaction"
import {T_TransactionConstructor} from "./T_TransactionConstructor"

/**
 * # fakeCheckingTransactionRecords
 * @description Mocked checking transaction records
 * @type {any[]}
 */
export let fakeCheckingTransactionRecords: T_TransactionConstructor[] = []


//<editor-fold desc="Add to aray">
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: Math.round(Math.random() * 10) * 300 + 1500,
		accountLabel: "checking",
		accountTransactionsHistory: {
			transactionType: "Electronic",
			amount: 50,
			date: new Date(2022, 6, 5),
			description: "Golden Sun Bakery",
		}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 30,
		date: new Date(2022, 6, 7),
		description: "Golden Sun Bakery",
	}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 40,
		date: new Date(2022, 6, 8),
		description: "Golden Sun Bakery",
	}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 5,
		date: new Date(2022, 6, 9),
		description: "Golden Sun Bakery",
	}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 12,
		date: new Date(2022, 6, 10),
		description: "Golden Sun Bakery",
	}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 45,
		date: new Date(2022, 6, 11),
		description: "Golden Sun Bakery",
	}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 29,
		date: new Date(2022, 6, 12),
		description: "Golden Sun Bakery",
	}
					  })
)
fakeCheckingTransactionRecords.push(
	createTransaction({
		accountBalance: fakeCheckingTransactionRecords.at(-1)!.balance,
	accountLabel: "checking",
	accountTransactionsHistory: {
		transactionType: "Electronic",
		amount: 32,
		date: new Date(2022, 6, 13),
		description: "Golden Sun Bakery",
	}
					  })
)
//</editor-fold>
