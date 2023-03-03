import React, {useState} from "react"
import $transaction from "../shared/transaction.module.scss"
import $sro from "../shared/sro.module.scss"
import {Navigate} from "react-router-dom"
import {PATH} from "../config.json"
import {MainContainer} from "../container/MainContainer"
import {getRandomKey} from "../functions/getRandomKey()"
import {UseTransactionPage} from "../hooks/useTransactionPage"
import {dateToUSFormat, Transaction} from "../functions/transaction"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"

export const TransactionPage = () => {
	const {isConnected, transactions, navigate} = UseTransactionPage()

	const mockTransaction = transactions[0]
	// todo could be extracted as a middleware for both login and profile pages
	if (!isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />
	}

	// todo add accessibility to form

	return (
		<MainContainer
			ariaDescription={`Welcome to your transaction page!`}
			ariaLabel={"Transaction Page"}>
			<aside className={$sro.screenReadersOnly}>
				{/*Welcome to Your Profile Page. Here you can find your transactions and update*/}
				{/*informations*/}
			</aside>
			<div aria-label={"Transaction Page"}>
				<header className={$transaction.header}>
					<h2 className={$sro.screenReadersOnly}>Transaction Page</h2>
					<p aria-description={"Number of transactions"}>Argent Bank (x83545)</p>
					{/*Transactions array length*/}

					<p aria-description={"Available Balance"}>$2,0854.78</p>
					{/*Transactions Array, last input's balance*/}

					<p>Available Balance</p>
				</header>

				<h2 className={$sro.screenReadersOnly}>Transactions</h2>
				<table className={$transaction.table}>
					<thead>
						<tr>
							<th aria-hidden={"true"}>Toggle</th>
							<th aria-label={"Date"}>DATE</th>
							<th aria-label={"Description"}>DESCRIPTION</th>
							<th aria-label={"Amount"}>AMOUNT</th>
							<th aria-label={"Balance"}>BALANCE</th>
						</tr>
					</thead>
					<tbody>
						<TransactionItem
							key={getRandomKey()}
							transaction={mockTransaction}
						/>
						<TransactionItem
							key={getRandomKey()}
							transaction={mockTransaction}
						/>
						<TransactionItem
							key={getRandomKey()}
							transaction={mockTransaction}
						/>
					</tbody>
				</table>
			</div>
		</MainContainer>
	)
}

function TransactionItem({transaction}: {transaction: Transaction}) {
	const [showInformations, setShowInformations] = useState(true)
	return (
		<tr aria-label={"Transaction Row"}>
			<td aria-label={"Expend informations"}>
				<button
					aria-description={"Click to get more informations"}
					onClick={() => setShowInformations(prev => !prev)}>
					{showInformations ? <IoIosArrowUp /> : <IoIosArrowDown />}
				</button>
			</td>
			<td aria-label={"Date"}>{dateToUSFormat(transaction.date)}</td>
			<td aria-label={"Description"}>{transaction.description}</td>
			<td aria-label={"Amount"}>${transaction.amount}</td>
			<td aria-label={"Balance"}>${transaction.balance}</td>
			{showInformations && (
				<aside
					// rowSpan={2}
					// colSpan={4}
					aria-expanded={showInformations}
					className={$transaction.transactionItem__extra}>
					<p>Transaction Type: {transaction.transactionType}</p>
					<p>
						Category: {transaction.category}
						<span>icon</span>
					</p>
					<p>
						Notes: {transaction.notes}
						<span>icon</span>
					</p>
				</aside>
			)}
		</tr>
	)
}
