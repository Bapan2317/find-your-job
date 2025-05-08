import { createBrowserRouter } from "react-router";
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
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                    loader: () => fetch("/companies.json")
                },
                {
                    path: "/banner",
                    element: <Banner />
                },
                {
                    path: "/companies",
                    element: <Companies />
                },
                {
                    path: "/company/:id",
                    loader: () => fetch("/companies.json"),
                    element: (
                        <PrivateRoute>
                            <Company />
                        </PrivateRoute>
                    )
                },
                {
                    path: "/profile",
                    element: <PrivateRoute><Profile /></PrivateRoute>
                },
                {
                    path: "/blog",
                    element: <Blog />,
                    loader: () => fetch("/blog.json"),
                },
                {
                    path: "/contactUs",
                    element: <ContactUs />
                },
                {
                    path: "/updateProfile",
                    element: <PrivateRoute><UpdateProfile /></PrivateRoute>
                },
                {
                    path: "/statsOverview",
                    element: <StatsOverview />
                }
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/auth/login",
                    element: <Login />
                },
                {
                    path: "/auth/register",
                    element: <Register />
                }
            ]
        }
    ]
);
