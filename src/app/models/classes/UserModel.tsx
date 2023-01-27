import IUserData from "../interfaces/IUserData"
import AccountModel from "./AccountModel"

export default class UserModel implements IUserData {
	authentications: {email: string; password: string}
	bankAccount: {checking: AccountModel; savings: AccountModel; creditCard: AccountModel}
	firstName: string
	lastName: string


	constructor(authentications: {email: string; password: string}, bankAccount: {checking: AccountModel; savings: AccountModel; creditCard: AccountModel}, firstName: string, lastName: string) {
		this.authentications = authentications
		this.bankAccount = bankAccount
		this.firstName = firstName
		this.lastName = lastName
	}
}