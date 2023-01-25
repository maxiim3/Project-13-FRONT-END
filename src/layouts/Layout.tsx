import React from "react";
import {Outlet} from "react-router-dom";
import './layout.module.scss'
import Header from "./Header";
import Footer from "./Footer";
export function Layout() {
    return (
        <div className="App">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}