import { useState, useEffect } from "react"

const EventTable = () => {
  const [events, setEvents] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error))
  }, [])

  const handleEdit = (event) => {
    setCurrentEvent(event)
    setIsModalOpen(true)
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setEvents(events.filter((event) => event.id !== id))
      })
      .catch((error) => console.error("Error deleting event:", error))
  }

  const handleUpdate = () => {
    fetch(`http://localhost:3000/events/${currentEvent.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentEvent),
    })
      .then((response) => response.json())
      .then((updatedEvent) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
          )
        )
        setIsModalOpen(false)
        setCurrentEvent(null)
      })
      .catch((error) => console.error("Error updating event:", error))
      .finally(() => {
        fetch("http://localhost:3000/events")
          .then((response) => response.json())
          .then((data) => setEvents(data))
          .catch((error) => console.error("Error fetching events:", error))
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCurrentEvent({ ...currentEvent, [name]: value })
  }

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Event Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="py-2 px-4 border-b">{event.id}</td>
              <td className="py-2 px-4 border-b">{event.title}</td>
              <td className="py-2 px-4 border-b">
                <img src={event.imglink} alt={event.title} className="w-24" />
              </td>
              <td className="py-2 px-4 border-b">{event.description}</td>
              <td className="py-2 px-4 border-b">{event.address}</td>
              <td className="py-2 px-4 border-b">
                {new Date(event.eventDate).toLocaleDateString()}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Edit Event</h2>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                name="title"
                value={currentEvent.title}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Image Link:
              <input
                type="text"
                name="imglink"
                value={currentEvent.imglink}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Description:
              <input
                type="text"
                name="description"
                value={currentEvent.description}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </label>
            <label className="block mb-2">
              Address:
              <select
                name="address"
                value={event.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Locations</option>
                <option value="alangilan">Alangilan</option>
                <option value="anilao">Anilao</option>
                <option value="balagtas">Balagtas</option>
                <option value="bolbok">Bolbok</option>
                <option value="delapaz">Dela Paz</option>
                <option value="dumuclay">Dumuclay</option>
                <option value="guloditaas">Gulod Itaas</option>
                <option value="ilijan">Ilijan</option>
                <option value="lipa">Lipa</option>
                <option value="libjo">Libjo</option>
                <option value="pallocan">Pallocan</option>
                <option value="pagkilatan">Pagkilatan</option>
                <option value="sorosoro">Soro soro</option>
                <option value="tabangao">Tabangao</option>
                <option value="talumpok">Talumpok</option>
                <option value="tulo">Tulo</option>
              </select>
            </label>
            <label className="block mb-4">
              Event Date:
              <input
                type="date"
                name="eventDate"
                value={
                  new Date(currentEvent.eventDate).toISOString().split("T")[0]
                }
                onChange={handleChange}
                className="border p-2 w-full"
              />
            </label>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventTable
