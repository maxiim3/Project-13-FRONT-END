import React, {useState} from "react"
import $profile from "./profile.module.scss"
import $sro from "../../stylesheet/sro.module.scss"
import {useSelector} from "react-redux"
import {Navigate, useNavigate} from "react-router-dom"
import {PATH} from "../../../config.json"
import {TransactionElement} from "./components/TransactionElement"
import transactions from "./mockedTransactions.json"
import {getRandomKey} from "../../utils/getRandomKey()"
import {Modal} from "./components/Modal"
import {MainContainer} from "../../containers/Main/MainContainer"

export const ProfilePage = () => {
	const {auth} = useSelector((state: any) => state)
	const navigate = useNavigate()

	const [modalIsVisible, setModalIsVisible] = useState(false)
	const showModal = () => {
		setModalIsVisible(true)
	}
	const closeModal = e => {
		e.preventDefault()
		setModalIsVisible(false)
	}
	if (!auth.isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />
	}

	const {lastName, firstName} = auth.user

	return (
		<MainContainer
			ariaDescription={`Welcome to your profile page ${firstName}!`}
			ariaLabel={"User Profile Page"}>
			<>
				<section className={$profile.header}>
					<Modal
						isVisible={modalIsVisible}
						handleCloseModal={closeModal}
					/>
					<h1>
						Welcome back
						<br />
						{firstName} {lastName}!
					</h1>
					<button onClick={showModal}>Edit Name</button>
				</section>
				<h2 className={$sro.screenReadersOnly}>Accounts</h2>

				{transactions.map(account => (
					<TransactionElement
						{...account}
						key={getRandomKey()}
					/>
				))}
			</>
		</MainContainer>
	)
}
