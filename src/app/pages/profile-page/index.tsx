import React from "react"
import $profile from "./profile.module.scss"
import $shared from "../../global/shared.module.css"
import useMockedUser from "../../../static/mocks/useMockedUser"
import useMockedAuth from "../../../static/mocks/useMockedAuth"

export default () => {
	// const {lastName, firstName, bankAccount} = useSelector((state: any) => state.user)
	const {lastName, firstName, bankAccount} = useMockedUser(0)
	const auth = useMockedAuth(false)

	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$profile.header}>
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}!
				</h1>
				<button>Edit Name</button>
			</section>
			<h2 className={$shared.screenReadersOnly}>Accounts</h2>

			{/*Section*/}
			<section className={$profile.section}>
				<div data-selector={"content"}>
					<h3>Argent Bank Checking (x8349)</h3>
					<p>{bankAccount.checking.balance}</p>
					<p>Available Balance</p>
				</div>
				<div data-selector={"cta"}>
					<button>View transactions</button>
				</div>
			</section>

			{/*Section*/}
			<section className={$profile.section}>
				<div data-selector={"content"}>
					<h3>Argent Bank Savings (x6712)</h3>
					<p>{bankAccount.savings.balance}</p>
					<p>Available Balance</p>
				</div>
				<div data-selector={"cta"}>
					<button>View transactions</button>
				</div>
			</section>

			{/*Section*/}
			<section className={$profile.section}>
				<div data-selector={"content"}>
					<h3>Argent Bank Credit Card (x8349)</h3>
					<p>{bankAccount.creditCard.balance}</p>
					<p>Current Balance</p>
				</div>
				<div data-selector={"cta"}>
					<button>View transactions</button>
				</div>
			</section>
		</main>
	)
}