import React, {useState} from "react"
import $profile from "./profile.module.scss"
import $shared from "../../sass/shared.module.css"
import {useDispatch, useSelector} from "react-redux"
import {Navigate, useNavigate} from "react-router-dom"
import {PATH} from "../../config.json"
import {TransactionElement} from "./TransactionElement"
import transactions from "./mockedTransactions.json"
import {getRandomKey} from "../../utils/getRandomKey()"

export const ProfilePage = () => {
	const {auth} = useSelector((state: any) => state)
	const navigate = useNavigate()


	const [modalIsVisible, setModalIsVisible] = useState(false)
	const showModal = () => {
		setModalIsVisible(true)
	}
	const closeModal = (e) => {
		e.preventDefault()
		setModalIsVisible(false)

	}
	if (!auth.isConnected) {
		navigate(PATH.LOGIN)
		return <Navigate to={PATH.LOGIN} />

	}

	const {lastName, firstName} = auth.user

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$profile.header}>
				{/*<Modal*/}
				{/*	isVisible={modalIsVisible}*/}
				{/*	handleCloseModal={closeModal}*/}
				{/*/>*/}
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}!
				</h1>
				<button onClick={showModal}>Edit Name</button>
			</section>
			<h2 className={$shared.screenReadersOnly}>Accounts</h2>

			{transactions.map(account => (
				<TransactionElement {...account} key={getRandomKey()} />
			))}
		</main>
	)
}
