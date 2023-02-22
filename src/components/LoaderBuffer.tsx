import React, {ReactElement, useEffect, useState} from "react"
import {useJWTDecoder} from "../hooks/useJWTDecoder"
import {useDispatch} from "react-redux"
import getUserProfile from "../api/getUserProfile"
import {logUserIn} from "../store/store"
import Header from "./header/Header"
import Footer from "./footer"

export const LoaderBuffer = (props: {children: ReactElement | ReactElement[]}) => {
	const E_STATE = {
		LOADING: "loading",
		IS_LOGGED: "is logged",
		IS_NOT_LOGGED: "is not logged",
	}
	const [appStat, setAppStat] = useState(E_STATE.LOADING)

	const {token} = useJWTDecoder()
	const dispatch = useDispatch()

	useEffect(() => {
		if (token) {
			setAppStat(E_STATE.LOADING)
			getUserProfile().then(res => {
				if (res.status === 200) {
					const user = res.data.body
					//@ts-ignore
					dispatch(logUserIn(user))
					setAppStat(E_STATE.IS_LOGGED)
				}
			})
		}
		else {
			setAppStat(E_STATE.IS_NOT_LOGGED)
		}
	}, [token])

	if (appStat === E_STATE.LOADING) {
		return (
			<>
				<Header />
				<div>LOADING...</div>
				<Footer />
			</>
		)
	}
	if (appStat === E_STATE.IS_NOT_LOGGED) {
		localStorage.clear()
	}

	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	)
}