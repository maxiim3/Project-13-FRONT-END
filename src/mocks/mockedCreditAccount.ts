import {createTransaction, Transaction} from "../functions/createTransaction"

export let mockedCreditTransactions: Transaction[] = []
export let mockedCreditAccount = {
	label: "credit",
	transactions: mockedCreditTransactions,
}

//<editor-fold desc="Add to aray">

mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance: Math.round(Math.random() * 10) * 3000 + 2000,
						  amount: 50,
						  date: new Date(2022, 6, 5),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 30,
						  date: new Date(2022, 6, 7),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 40,
						  date: new Date(2022, 6, 8),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 5,
						  date: new Date(2022, 6, 9),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 12,
						  date: new Date(2022, 6, 10),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 45,
						  date: new Date(2022, 6, 11),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 29,
						  date: new Date(2022, 6, 12),
						  description: "Golden Sun Bakery",
					  })
)
mockedCreditAccount.transactions.push(
	createTransaction({
						  transactionType: "Electronic",
						  balance:
						  mockedCreditAccount.transactions[mockedCreditAccount.transactions.length - 1].balance,
						  amount: 32,
						  date: new Date(2022, 6, 13),
						  description: "Golden Sun Bakery",
					  })
)

//</editor-fold>