import { useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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
  const createEvent = async (event) => {
    try {
      const data = await prisma.event.create({
        data: {
          title: event.title,
          imglink: event.imglink,
          description: event.description,
          address: event.address,
          eventdate: event.eventdate,
        },
      })

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
    <div>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image Link:</label>
          <input
            type="text"
            name="imglink"
            value={event.imglink}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={event.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Event Date:</label>
          <input
            type="datetime-local"
            name="eventdate"
            value={event.eventdate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  )
}

export default AdminHome
