import PropTypes from "prop-types"

export default function EventCard(props) {
  return (
    <>
      {props.event.map((event, index) => (
        <div key={index}>
          <img src={event.imglink} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.address}</p>
          <p>{event.eventDate}</p>
        </div>
      ))}
    </>
  )
}

EventCard.propTypes = {
  event: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      imglink: PropTypes.string,
      description: PropTypes.string,
      address: PropTypes.string,
      eventDate: PropTypes.string,
    })
  ).isRequired,
}
