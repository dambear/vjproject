import { useState } from "react"

const AdminHome = () => {
  const [event, setEvent] = useState({
    title: "",
    imglink: "",
    description: "",
    address: "",
    eventdate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }))
  }

  const createEvent = async (eventData) => {
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: eventData.title,
          imglink: eventData.imglink,
          description: eventData.description,
          address: eventData.address,
          eventDate: new Date(eventData.eventdate).toISOString(),
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Network response was not ok: ${errorText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error creating event:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await createEvent(event)
      if (data) {
        console.log("Event created:", data)
      } else {
        console.error("Error creating event")
      }
    } catch (error) {
      console.error("Error creating event:", error)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image Link:</label>
          <input
            type="text"
            name="imglink"
            value={event.imglink}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
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
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Event Date:</label>
          <input
            type="datetime-local"
            name="eventdate"
            value={event.eventdate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Event
        </button>
      </form>
    </div>
  )
}

export default AdminHome
