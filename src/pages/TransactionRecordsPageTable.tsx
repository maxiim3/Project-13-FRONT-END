import {mockedCheckingAccount} from "../mocks/mockedCheckingTransactions"
import $transaction from "../shared/transaction.module.scss"
import $sro from "../shared/sro.module.scss"
import {TransactionItem} from "../components/TransactionItem"
import {getRandomKey} from "../functions/getRandomKey()"
import React from "react"

export function TransactionRecordsPageTable({transactions}: {transactions: typeof mockedCheckingAccount}) {
	return (
		<section
			role={"table"}
			tabIndex={0}
			aria-description={"In this table you will find all the related transactions"}
			className={$transaction.table}>
			<h2 className={$sro.screenReadersOnly}>Transactions</h2>
			<header>
				<span aria-hidden={"true"}></span>
				<ul role={"rowheader"}>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Date"}>
						DATE
					</li>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Description"}>
						DESCRIPTION
					</li>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Amount"}>
						AMOUNT
					</li>
					<li
						tabIndex={0}
						role={"columnheader"}
						aria-label={"Balance"}>
						BALANCE
					</li>
				</ul>
			</header>
			<main>
				{transactions.transactions
							 .sort((a, b) => b.date.getUTCDate() - a.date.getUTCDate())
							 .map(data => (
								 <TransactionItem
									 key={getRandomKey()}
									 transaction={data}
								 />
							 ))}
			</main>
		</section>
	)
}