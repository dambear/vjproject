import { Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout
