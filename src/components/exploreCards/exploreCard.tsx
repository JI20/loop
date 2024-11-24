import moment from "moment";

export const ExploreCard = (props: any) => {
  const { event } = props;

  const date = new Date(event.start_time);

  return (
    <div
      className={`${
        !(event.participants === 0) ? "border-orange" : "border-black"
      } border-[2px] w-[160px] h-[250px] sm:w-[160px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] relative flex flex-col justify-between`}
    >
      <div className="bg-white h-[100px]">
        <h1 className="mx-1 text-l font-bold">{event.name}</h1>
        {!(event.participants === 0) && (
          <>
            <p className="mx-1 text-orange">@{event.host}</p>
          </>
        )}
      </div>
      {!(event.participants === 0) && (
        <div className="flex justify-between">
          <p className="text-white">
            {event.participants}/{event.max_number_of_participants}
          </p>
          <p className="text-white">{`${moment(date).format("HH:mm")}`}</p>
        </div>
      )}
      {event.participants === 0 && (
        <>
          <button className="mx-1 mb-2 bg-blue px-2 text-white py-1">
            Start
          </button>
        </>
      )}
      <img
        className="absolute object-cover z-[-1] w-full h-full"
        src={event.picture}
      />
    </div>
  );
};
