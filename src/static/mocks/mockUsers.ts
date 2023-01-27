import UserModel from "../../app/models/classes/UserModel"

const mockUser1: UserModel = {
	firstName: "John",
	lastName: "Doe",
	authentications: {
		email: "doe.johen@mymail.net",
		password: "123456",
	},
	bankAccount: {
		checking: {
			balance: 2_082.79,
			transactions: [
				{
					amount: 1000,
					date: new Date(),
					type: "deposit",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
			],
		},

		creditCard: {
			balance: 928.42,
			transactions: [
				{
					amount: 1000,
					date: new Date(),
					type: "deposit",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",

				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
			],
		},
		savings: {
			balance: 10_184.30,
			transactions: [
				{
					amount: 1000,
					date: new Date(),
					type: "deposit",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
			],
		},
	},
}

const mockUser2: UserModel = {
	firstName: "Daniel",
	lastName: "Baker",
	authentications: {
		email: "baker.daniel@mymail.net",
		password: "123456",
	},
	bankAccount: {
		checking: {
			balance: 1_012.05,
			transactions: [
				{
					amount: 1000,
					date: new Date(),
					type: "deposit",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
			],
		},

		creditCard: {
			balance: 475.24,
			transactions: [
				{
					amount: 1000,
					date: new Date(),
					type: "deposit",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",

				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
			],
		},
		savings: {
			balance: 9_757.30,
			transactions: [
				{
					amount: 1000,
					date: new Date(),
					type: "deposit",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
				{
					amount: 500,
					date: new Date(),
					type: "withdrawal",
				},
			],
		},
	},
}

export default [mockUser1, mockUser2]