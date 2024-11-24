import moment from "moment";

export const ExploreCard = (props: any) => {
  const { event } = props;

  const date = new Date(event.start_time);

  return (
    <div
      className={`bg-white ${
        !(event.participants === 0) ? "border-orange" : "border-black"
      } border-[2px] w-[150px] h-[190px] sm:w-[160px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] p-2 flex flex-col justify-between`}
    >
      <div>
        <h1 className="text-l font-bold">{event.name}</h1>
        {!(event.participants === 0) && (
          <p className="text-orange">@{event.host}</p>
        )}
      </div>
      {!(event.participants === 0) && (
        <div className="flex justify-between">
          <p>
            {event.participants}/{event.max_number_of_participants}
          </p>
          <p>{`${moment(date).format("HH:mm")}`}</p>
        </div>
      )}
    </div>
  );
};
