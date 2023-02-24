import {useEffect, useMemo, useState} from "react"
import {useJWTDecoder} from "./useJWTDecoder"
import {useLogUserIn} from "./UseLogUserIn"
import getUserProfile from "../api/getUserProfile"

export const useAuthChecker = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [user, setUser] = useState(null)
	const {token} = useMemo(() => {
		const token = localStorage.getItem("token")
		return token?  useJWTDecoder(token) : {token: null}
	}, [])
	const {logUserIn} = useLogUserIn()

	const checkAuth = async () => {
		if (!token) {
			setIsLoading(false)
			return
		}
		try {
			const responseFromAPI = await getUserProfile()

			setUser(responseFromAPI.data.body)
		} finally {
			setIsLoading(false)
		}
	}

	useMemo(() => {
		checkAuth().then()
	}, [])
	useEffect(() => {
		user && logUserIn(user)
	}, [user])

	return {isLoading}
}
