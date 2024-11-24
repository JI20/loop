
function EventCard(props: any) {
    return (
      <div className="m-1 w-1/2 mx-auto bg-white rounded-lg shadow-md transform transition hover:scale-105 hover:shadow-xl">
        <div className="flex justify-between mb-3">
          <div className="w-1/2"><h2 className="font-semibold text-left text-md">{props.name}</h2></div>
          <div className="bg-[#37fca7] rounded-lg p-1 ">{props.category}</div>
        </div>
        <div className="flex justify-between">
        <div className="text-left font-medium">
            {props.participants}/{props.max_number_of_participants}
        </div>
        <div className=" text-right font-medium">
            {props.start_time}
        </div>
        </div>
        </div>
    );
  }
  
  export default EventCard;
  