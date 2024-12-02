import PropTypes from "prop-types"

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.imglink} alt={event.title} className="event-image" />
      <div className="event-details">
        <h2 className="event-title">{event.title}</h2>
        <p className="event-description">{event.description}</p>
        <p className="event-address">{event.address}</p>
        <p className="event-date">
          {new Date(event.eventdate).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}
EventCard.propTypes = {
  event: PropTypes.shape({
    imglink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    eventdate: PropTypes.string.isRequired,
  }).isRequired,
}

export default EventCard
