import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, Router, RouterProvider } from "react-router-dom";
import App from "./app";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
