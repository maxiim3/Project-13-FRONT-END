interface T_UserSchema {
	_id: object
	_v: any
	firstName: string
	lastName: string
	email: string
	password: string
	createdAt: string
	updatedAt: string
}

export type T_UserSchema_From_API = T_UserSchema
export type T_UserSchema_For_API = Omit<T_UserSchema, "_v" | "createdAt" | "updatedAt" | "_id">
