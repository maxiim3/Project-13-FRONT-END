import React, {useRef} from "react"
import {calculateBalance} from "../functions/calculateBalance"
import {getRandomKey} from "../functions/getRandomKey"
import $style from "../sass/profile.module.scss"
import {Link} from "react-router-dom"
import {PATH} from "../config.json"
import {T_TransactionConstructor} from "../mocks/T_TransactionConstructor"

/**
 * # ProfilePageAccountOverview
 * @description Profile Page Account Overview
 * @requires Link
 * @param {{transactions: T_TransactionConstructor[]}} props
 * @return {JSX.Element}
 */
export function ProfilePageAccountOverview(props: {transactions: T_TransactionConstructor[]}) {
	const balance = useRef(calculateBalance(props.transactions)).current
	const length = props.transactions.length
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
				<Link
					className={$style.cta}
					to={`${PATH.TRANSACTIONS}/${props.transactions.at(0)!.accountLabel}`}>
					View transactions
				</Link>
			</div>
		</article>
	)
}
