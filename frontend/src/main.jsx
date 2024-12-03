import "./styles/index.css"

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import AdminLayout from "./layouts/AdminLayout.jsx"
import UserLayout from "./layouts/UserLayout.jsx"
import AdminHome from "./pages/(admin)/AdminHome.jsx"
import Login from "./pages/auth/Login.jsx"
import Register from "./pages/auth/Register.jsx"
import Home from "./pages/(user)/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
