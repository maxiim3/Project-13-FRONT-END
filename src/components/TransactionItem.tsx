import React, {useState} from "react"
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import $transaction from "../sass/transaction.module.scss"
import {FaPen} from "react-icons/all"
import {dateToUSFormat} from "../functions/dateToUSFormat"
import {T_TransactionConstructor} from "../mocks/T_TransactionConstructor"
import PropTypes from "prop-types"
import {TransactionItemProps} from "../types/TransactionItemProps"

/**
 * # TransactionItem
 * @description This component is used to display the transaction in the Transaction Page
 * @param {T_TransactionConstructor} transaction
 * @return {JSX.Element}
 * @constructor
 */
export function TransactionItem({transaction}: {transaction: T_TransactionConstructor}) {
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

TransactionItem.propTypes = {
	transaction: TransactionItemProps.isRequired,
}
