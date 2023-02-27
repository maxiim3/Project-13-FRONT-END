import React from "react"
import {T_Account} from "../../../types/T_Account"
import $style from "../profile.module.scss"
import {textToCamelCase} from "../../../../utils/textToCamelCase"
import {TransactionContent} from "./TransactionContent"
import {ButtonCTA} from "./ButtonCTA"

export function TransactionItem({numberOfTransactions, Label, balance}: T_Account) {
	const id = textToCamelCase(Label)

	// todo add accessibility
	return (
		<article
			className={$style.transactionWrapper}
			aria-label={Label}>
			<TransactionContent
				id={id}
				label={Label}
				numberOfTransactions={numberOfTransactions}
				balance={balance}
			/>
			<ButtonCTA />
		</article>
	)
}
