import React, {useRef} from "react"
import $style from "../../../shared/profile.module.scss"
import {textToCamelCase} from "../../../functions/textToCamelCase"
import {TransactionSumUp} from "./TransactionSumUp"
import {ButtonCTA} from "./ButtonCTA"
import {Modal} from "../../../container/modal/Modal"
import {useModal} from "../../../container/modal/useModal"
import {capitalizeFirstLetter} from "../../../functions/capitalizeFirstLetter"
import {T_BankAccount} from "../../../types/T_BankAccount"
import {getRandomKey} from "../../../functions/getRandomKey()"
import {TableOfTransactions} from "./TableOfTransactions"

export function TransactionWrapper(transactions: T_BankAccount) {
	const id = textToCamelCase(transactions.label)
	const {modalRef, closeModal, openModal} = useModal()
	const title = useRef(capitalizeFirstLetter(transactions.label)).current
	// todo add accessibility
	return (
		<article
			key={getRandomKey()}
			className={$style.transactionWrapper}
			aria-label={title}>
			<TransactionSumUp
				id={id}
				label={transactions.label}
				numberOfTransactions={transactions.numberOfTransactions}
				balance={transactions.balance}
			/>
			<ButtonCTA onOpen={openModal} />
			<Modal
				modalRef={modalRef}
				onClose={closeModal}>
				<TableOfTransactions
					title={title}
					transactions={transactions}
				/>
			</Modal>
		</article>
	)
}
