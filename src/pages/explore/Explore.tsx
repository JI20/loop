import EventCard from "../../components/explore/EventCard";
import EventForm from "../../components/explore/EventForm";
import { events } from "../../config/events";

function Explore() {
    return (
        <div className="text-center bg-[#1B98D5] h-screen">
          <div className="text-xl font-bold">
            <h1>Explore</h1>
          </div>
          <br />
          <div className="mx-auto rounded-lg w-40 bg-[#005A9F]">
            <button>
              + create new Event
            </button>
          </div>
          <div>
              {[events[0]].map((event) => (
                  <EventCard
                    name={event.name}
                    category={event.category}
                    start_time={event.start_time}
                    end_time={event.end_time}
                    max_number_of_participants={event.max_number_of_participants}
                    participants={event.participants}
                  />
                ))}
            </div>
          </div>
    );
  }
  
  export default Explore;