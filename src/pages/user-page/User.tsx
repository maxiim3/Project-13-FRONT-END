import React from "react"
import $user from "./user.module.scss"
import $shared from "../../shared/shared.module.css"

export function User() {
	return (
		<main className={$shared.mainWrapperDarkBG}>
			<section className={$user.header}>
				<h1>Welcome back<br />Tony Jarvis!</h1>
				<button>Edit Name</button>
			</section>
			<h2 className={$shared.screenReadersOnly}>Accounts</h2>

			{/*Section*/}
			<section className={$user.section}>
				<div data-selector={"content"}>
					<h3>Argent Bank Checking (x8349)</h3>
					<p>$2,082.79</p>
					<p>Available Balance</p>
				</div>
				<div data-selector={"cta"}>
					<button>View transactions</button>
				</div>
			</section>

			{/*Section*/}
			<section className={$user.section}>
				<div data-selector={"content"}>
					<h3>Argent Bank Savings (x6712)</h3>
					<p>$10,928.42</p>
					<p>Available Balance</p>
				</div>
				<div data-selector={"cta"}>
					<button>View transactions</button>
				</div>
			</section>

			{/*Section*/}
			<section className={$user.section}>
				<div data-selector={"content"}>
					<h3>Argent Bank Credit Card (x8349)</h3>
					<p>$184.30</p>
					<p>Current Balance</p>
				</div>
				<div data-selector={"cta"}>
					<button>View transactions</button>
				</div>
			</section>
		</main>

	)
}

interface IUserData {
	name: string
	authentications: {
		id: string
		password: string
	}
	accounts: {
		checking: IAccount,
		savings: IAccount,
		creditCard: IAccount
	}
}

interface IAccount {
	balance: number
	transactions: ITransaction[]
}

interface ITransaction {
	amount: number
	date: Date
	type: "deposit" | "withdrawal"
}