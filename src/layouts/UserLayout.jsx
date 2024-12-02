import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar.jsx"

const UserLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout