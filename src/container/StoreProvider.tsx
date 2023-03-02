import {Provider} from "react-redux"
import {Store} from "../store/store"
import React from "react"

export function StoreProvider({children}: {children: JSX.Element}) {
	return <Provider store={Store}>{children}</Provider>
}
