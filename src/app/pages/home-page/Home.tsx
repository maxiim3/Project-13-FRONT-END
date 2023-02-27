import React from "react"
import Hero from "./components/hero-component/Hero"
import Features from "./components/features-component/Features"
import {MainContainer} from "../../containers/Main/MainContainer"

export default () => (
	<MainContainer
		ariaLabel={"Home Page"}
		ariaDescription={"Welcome to Argent Bank! Open a savings account today!"}>
		<Hero />
		<Features />
	</MainContainer>
)
