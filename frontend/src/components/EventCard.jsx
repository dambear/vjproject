import PropTypes from "prop-types"

export default function EventCard(props) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {props.event.map((event, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden border "
        >
          <img
            src={event.imglink}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-gray-600 mb-2">{event.address}</p>
            <p className="text-gray-500">
              {new Date(event.eventDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
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
