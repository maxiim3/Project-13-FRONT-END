import React, {useState} from "react"
import $profile from "./sass/profile.module.scss"
import $shared from "../../sass/shared.module.css"
import {useDispatch, useSelector} from "react-redux"
import {Navigate, useNavigate} from "react-router-dom"
import {PATH} from "../../config.json"
import {UpdateUserModal} from "./UpdateUserModal"
import {T_Account, TransactionComponent} from "./TransactionComponent"

export const ProfilePage = () => {
	const {auth} = useSelector((state: any) => state)
	const navigate = useNavigate()
	const dispatch = useDispatch()
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

	const BankAccounts: Array<T_Account> = [
		{
			Label: "Checking",
			balance: 2082.79,
			numberOfTransactions: 8349,
		},
		{
			Label: "Savings",
			balance: 10928.42,
			numberOfTransactions: 6712,
		},
		{
			Label: "Credit Card",
			balance: 1200.0,
			numberOfTransactions: 8349,
		},
	]

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$profile.header}>
				<UpdateUserModal
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
			<h2 className={$shared.screenReadersOnly}>Accounts</h2>

			{BankAccounts.map(account => (
				<TransactionComponent {...account} />
			))}
		</main>
	)
}
