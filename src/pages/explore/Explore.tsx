import { ExploreCard } from "../../components/exploreCards/exploreCard";
import { eventSuggestions as events } from "../../config/events";
export const Explore = () => {
  return (
    <div className="w-screen flex flex-wrap [&>li]:px-[2px] [&>li]:py-[2px] justify-center">
      <h1 className="text-xl font-bold">Find your next small adventure.</h1>
      {events.map((event) => {
        return (
          <li className="list-none">
            <ExploreCard event={event} />
          </li>
        );
      })}
    </div>
  );
};
