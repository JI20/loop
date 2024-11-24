
function EventCard(props: any) {
    return (
      <div className="w-1/4 bg-white rounded-lg shadow-md p-6 transform transition hover:scale-105 hover:shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg text-gray-800">{props.name}</h2>
          <span className="px-3 py-1 text-sm bg-green-200 text-green-800 rounded-full">
            {props.category}
          </span>
        </div>
        <div className="mb-3">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-800">Start Time:</span> {props.start_time}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-sm">
            <span className="font-medium text-gray-800">Participants:</span> {props.participants}/{props.max_number_of_participants}
          </p>
          <button className="px-4 py-1 text-white bg-blue-500 rounded-full text-sm hover:bg-blue-600">
            Join
          </button>
        </div>
      </div>
    );
  }
  
  export default EventCard;
  