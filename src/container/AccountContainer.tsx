import React from "react"
import {getRandomKey} from "../functions/getRandomKey()"
import $style from "../shared/profile.module.scss"
import {PATH} from "../config.json"
import {useNavigate} from "react-router-dom"
import {Transaction} from "../functions/transaction"

interface AccountContainerProps {
	data: Transaction[]
}

export function AccountContainer({data}: AccountContainerProps) {
	const navigate = useNavigate()
	return (
		<article
			key={getRandomKey()}
			className={$style.transactionWrapper}
			aria-label={"Checking"}>
			<div data-selector={"content"}>
				<h3>Argent Bank Checking x8452</h3>
				<p>$45524</p>
				<p>Available Balance</p>
			</div>
			<div data-selector={"cta"}>
				<button onClick={() => navigate(PATH.TRANSACTION)}>View transactions</button>
			</div>
		</article>
	)
}
