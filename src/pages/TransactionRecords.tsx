import React, {useEffect} from "react"
import $sro from "../sass/sro.module.scss"
import {PATH} from "../config.json"
import {MainContainer} from "../container/MainContainer"
import {useTransactionRecordsPage} from "../hooks/useTransactionRecordsPage"
import {TransactionRecordsPageHeader} from "./TransactionRecordsPageHeader"
import {TransactionRecordsPageTable} from "./TransactionRecordsPageTable"

/**
 * # TransactionRecords
 * @description Transaction Records Page
 * @requires MainContainer
 * @requires TransactionRecordsPageHeader
 * @return {JSX.Element}
 */
export const TransactionRecords = () => {
	const {isConnected, listOfTransactions, navigate} = useTransactionRecordsPage()
	useEffect(() => {
		if (!listOfTransactions) {
			navigate(PATH.PROFILE)
		}

		if (!isConnected) {
			navigate(PATH.LOGIN)
		}
	}, [])

	return (
		<MainContainer
			ariaDescription={`Welcome to your transaction record page. You can find the history of all your transactions!`}
			ariaLabel={"Transaction Page"}>
			<aside className={$sro.screenReadersOnly}>
				Welcome to Your Transaction Page. Here you can find your transactions and update
				their informations.
			</aside>
			<section
				aria-level={2}
				aria-label={"Transaction Page"}>
				<TransactionRecordsPageHeader transactions={listOfTransactions!} />{" "}
				<TransactionRecordsPageTable transactions={listOfTransactions!} />
			</section>
		</MainContainer>
	)
}
