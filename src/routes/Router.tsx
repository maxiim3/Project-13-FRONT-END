import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import React from "react";
import {Layout} from "../layouts/Layout";
import Home from "../pages/Home";
import {SignIn} from "../pages/SignIn";
import {User} from "../pages/User";

export const RoutesElement = () => createBrowserRouter(createRoutesFromElements(
    <Route
        path={"/"}
        element={<Layout/>}
    >
        <Route
            path={"/"}
            element={<Home/>}
        />
        <Route
            path={"/sign-in"}
            element={<SignIn/>}
        />
        <Route
            path={"/user"}
            element={<User/>}
        />
    </Route>
))

export const ProvideRouter = () => <RouterProvider router={RoutesElement()}/>

