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
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Components/Profile";
import Blog from "../Pages/Blog";
import ContactUs from "../Pages/ContactUs";
import UpdateProfile from "../Pages/updateProfile";
import StatsOverview from "../Components/StatsOverview";




export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
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
                {
                    path: "profile",
                    Component: Profile
                },
                {
                    path: "blog",
                    Component: Blog,
                    loader: () => fetch("/blog.json"),
                },
                {
                    path: "contactUs",
                    Component: ContactUs
                },
                {
                    path: "updateProfile",
                    Component: UpdateProfile
                },
                {
                    path: "statsOverview",
                    Component: StatsOverview
                }
                // {
                //     path: "singleCompany"
                // }
            ]
        },
        {
            path: "/auth",
            Component: AuthLayout,
            errorElement: <ErrorPage></ErrorPage>,
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