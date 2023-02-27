import React from "react"
import {T_Account} from "../../../types/T_Account"
import $style from "../profile.module.scss"
import {textToCamelCase} from "../../../../utils/textToCamelCase"
import {TransactionContent} from "./TransactionContent"
import {ButtonCTA} from "./ButtonCTA"
import {Modal} from "../../../containers/modal/Modal"
import {useModal} from "../../../containers/modal/useModal"

export function TransactionItem({numberOfTransactions, label, balance, data}: T_Account) {
	const id = textToCamelCase(label)

	const {modalRef, closeModal, openModal} = useModal()

	// todo add accessibility
	return (
		<article
			className={$style.transactionWrapper}
			aria-label={label}>
			<Modal
				modalRef={modalRef}
				onClose={closeModal}>
				<h2>{label}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, commodi
					delectus eaque esse id ipsam laboriosam maxime, neque nihil obcaecati quidem
					quos, soluta tempore.
				</p>

				<h3>Nombre de transactions : {data.numberOfTransactions}</h3>
				<h3> Balance : ${data.balance}</h3>
				<ul>
					{[...data.income, ...data.outcome].map(item => (
						<li>
							<p>id: {item.transaction_id}</p>
							<p>${item.amount}</p>
							<p>Date: {item.date_emitted_received![1]}</p>
						</li>
					))}
				</ul>
			</Modal>
			<TransactionContent
				id={id}
				label={label}
				numberOfTransactions={numberOfTransactions}
				balance={balance}
			/>
			<ButtonCTA onOpen={openModal} />
		</article>
	)
}
