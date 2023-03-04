import React from "react"
import $sro from "../shared/sro.module.scss"
import {Navigate} from "react-router-dom"
import {PATH} from "../config.json"
import {MainContainer} from "../container/MainContainer"
import {UseInventoryPage} from "../hooks/useInventoryPage"
import {InventoryPageHeader} from "./InventoryPageHeader"
import {InventoryPageTable} from "./InventoryPageTable"

export const InventoryPage = () => {
	const {isConnected, transactions, navigate} = UseInventoryPage()

	if (!transactions) {
		navigate(PATH.PROFILE)
		return <Navigate to={PATH.PROFILE} />
	}

	if (!isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />
	}

	return (
		<MainContainer
			ariaDescription={`Welcome to your transaction page!`}
			ariaLabel={"Transaction Page"}>
			<aside className={$sro.screenReadersOnly}>
				Welcome to Your Transaction Page. Here you can find your transactions and update
				their informations.
			</aside>
			<section
				aria-level={2}
				aria-label={"Transaction Page"}>
				<InventoryPageHeader transactions={transactions} />{" "}
				<InventoryPageTable transactions={transactions} />
			</section>
		</MainContainer>
	)
}
