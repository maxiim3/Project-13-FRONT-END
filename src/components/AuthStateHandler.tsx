import React from "react"
import {Outlet} from "react-router-dom"
import {LayoutWrapper} from "../layout/LayoutWrapper"
import {useAuthChecker} from "../hooks/UseAuthChecker"

export const AuthStateHandler = () => {
	const {isLoading} = useAuthChecker()

	if (isLoading)
		return (
			<LayoutWrapper>
				<div>LOADING...</div>
			</LayoutWrapper>
		)

	return (
		<LayoutWrapper>
			<Outlet />
		</LayoutWrapper>
	)
}
