import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white text-black flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        <img src="/logo.png" alt="" />
      </div>
      <ul className="flex flex-col p-4 space-y-4">
        <li>
          <Link
            to="/admindashboard"
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/addevent"
            className="block px-4 py-2 rounded hover:bg-gray-200"
          >
            Add Event
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
