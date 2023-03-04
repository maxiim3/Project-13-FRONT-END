import React, {useState} from "react"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import $transaction from "../shared/transaction.module.scss"
import {FaPen} from "react-icons/all"
import {dateToUSFormat} from "../functions/dateToUSFormat"
import {Transaction} from "../functions/createTransaction"

export function TransactionItem({transaction}: {transaction: Transaction}) {
	const [showInformations, setShowInformations] = useState(false)
	return (
		<article
			tabIndex={0}
			role={"rowgroup"}
			aria-label={"transaction"}>
			<span aria-hidden={"true"}></span>
			<ul
				role={"row"}
				onClick={() => setShowInformations(prev => !prev)}>
				<li
					tabIndex={0}
					role={"cell"}
					aria-label={"Date"}>
					{dateToUSFormat(transaction.date)}
				</li>
				<li
					tabIndex={0}
					role={"cell"}
					aria-label={"Description"}>
					{transaction.description}
				</li>
				<li
					tabIndex={0}
					role={"cell"}
					aria-label={"Amount"}>
					${transaction.amount}
				</li>
				<li
					tabIndex={0}
					role={"cell"}
					aria-label={"Balance"}>
					${transaction.balance}
				</li>
			</ul>
			<button
				aria-label={"expend"}
				aria-description={"Click to get more informations"}
				onClick={() => setShowInformations(prev => !prev)}>
				{showInformations ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</button>
			{showInformations && (
				<aside
					tabIndex={showInformations ? 0 : -1}
					aria-description={"More informations about this transaction"}
					role={"row"}
					aria-expanded={showInformations}
					className={$transaction.transactionItem__extra}>
					<span aria-hidden={"true"}></span>
					<div>
						<p
							tabIndex={0}
							aria-label={"Transaction Type"}>
							Transaction Type: {transaction.transactionType}
						</p>
						<p
							tabIndex={0}
							aria-label={"Category"}
							aria-description={"Step into to read or update the category"}>
							Category: {transaction.category}
							<button
								aria-label={"edit"}
								aria-description={"Edit Transaction Category"}
								tabIndex={0}>
								<FaPen />
							</button>
						</p>
						<p
							tabIndex={0}
							aria-label={"Note"}
							aria-description={"Step into to read or update the category"}>
							Notes: {transaction.notes}
							<button
								aria-label={"edit"}
								aria-description={"Edit Note about transaction"}
								tabIndex={0}>
								<FaPen />
							</button>
						</p>
					</div>
				</aside>
			)}
		</article>
	)
}
