import React from "react"
import $error from "./error.module.scss"
import {Link} from "react-router-dom"
import {HomeRoute} from "../../routes/routes"

export default () => (
	<div className={$error.container}>
		<h1>404</h1>
		<p>Page not found</p>
		<Link to={HomeRoute.path}>Go bach to Home Page</Link>
	</div>
)
