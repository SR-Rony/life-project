import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
        path : '/',
        Component : RootLayout,
        children :[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/about',
                Component:About
            }
        ]
    }
])