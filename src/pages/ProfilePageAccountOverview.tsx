import React, {useRef} from "react"
import {calculateBalance} from "../functions/calculateBalance"
import {getRandomKey} from "../functions/getRandomKey()"
import $style from "../shared/profile.module.scss"
import {Link} from "react-router-dom"
import {PATH} from "../config.json"
import {Transaction} from "../functions/createTransaction"

interface AccountContainerProps {
	account: {
		label: string
		transactions: Transaction[]
	}
}

export function ProfilePageAccountOverview({account}: AccountContainerProps) {
	const balance = useRef(calculateBalance(account)).current
	const length = account.transactions.length
	return (
		<article
			key={getRandomKey()}
			className={$style.transactionWrapper}
			aria-label={"Checking"}>
			<div data-selector={"content"}>
				<h3>Argent Bank Checking x{length}</h3>
				<p>${balance}</p>
				<p>Available Balance</p>
			</div>
			<div>
				<Link className={$style.cta} to={`${PATH.INVENTORY}/${account.label}`}>View transactions</Link>
			</div>
		</article>
	)
}