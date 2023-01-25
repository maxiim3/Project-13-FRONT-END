import IAccount from "../classes/AccountModel"

export default interface IUserData {
	firstName: string
	lastName: string
	authentications: {
		email: string
		password: string
	}
	bankAccount: {
		checking: IAccount,
		savings: IAccount,
		creditCard: IAccount
	}
}

