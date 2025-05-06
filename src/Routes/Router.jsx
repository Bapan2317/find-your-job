import { createBrowserRouter } from "react-router";
// import HomeLayout from "../Layout/HomeLayout";
import Banner from "../Components/Banner";
import Companies from "../Components/Companies";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Company from "../Components/Company";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../provider/PrivateRoute";




export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    index: true,
                    path: "/",
                    loader: () => fetch("/companies.json"),
                    Component: Home
                },
                {
                    path: "banner",
                    Component: Banner
                },
                {
                    path: "companies",
                    Component: Companies,
                },
                {
                    path: "company/:id",
                    loader: () => fetch("/companies.json"),
                    element: <PrivateRoute>
                        <Company></Company>
                    </PrivateRoute>
                },
                // {
                //     path: "singleCompany"
                // }
            ]
        },
        {
            path: "/auth",
            Component: AuthLayout,
            children: [
                {
                    path: "/auth/login",
                    Component: Login
                },
                {
                    path: "/auth/register",
                    Component: Register
                }
            ]
        }
    ]
)