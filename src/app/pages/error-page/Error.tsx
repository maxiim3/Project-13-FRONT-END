import React from "react"
import $error from "./error.module.scss"
import {Link, Route} from "react-router-dom"
import {PATH} from "../../../config.json"
import {getRandomKey} from "../../utils/getRandomKey()"
import {MainContainer} from "../../containers/Main/MainContainer"



export default () => (
	<MainContainer ariaLabel={"Error Page"} ariaDescription={"Une erreur est survenue..."}>
		<h1>404</h1>
		<p>Page not found</p>
		<Link to={PATH.HOME}>Go bach to Home Page</Link>
	</MainContainer>
)