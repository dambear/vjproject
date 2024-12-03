import { useState, useEffect } from "react"
import EventCard from "../../components/EventCard"

export default function Home() {
  const [event, setEvents] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error))
  }, [])

  return (
    <>
      <p>Shedule Events</p>

      <div className="flex items-center justify-center">
        <EventCard event={event} />
      </div>
    </>
  )
}
