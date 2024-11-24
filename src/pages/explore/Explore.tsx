import { ExploreCard } from "../../components/exploreCards/exploreCard";
import { eventSuggestions as events } from "../../config/events";
import { useState } from "react";
import { categoriesColors } from "../../config/categories";

export const Explore = () => {
  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);

  const handleCategoryFilter = (c: string) => {
    let hiddenCategoriesNew = structuredClone(hiddenCategories);
    if (hiddenCategoriesNew.includes(c)) {
      let filteredList = hiddenCategoriesNew.filter((e) => {
        return e != c;
      });
      setHiddenCategories(filteredList);
    } else {
      hiddenCategoriesNew.push(c);
      setHiddenCategories(hiddenCategoriesNew);
    }
  };
  return (
    <div className="w-screen flex flex-wrap [&>li]:px-[2px] [&>li]:py-[2px] justify-center">
      <h1 className="text-2xl font-bold">Find your next small adventure.</h1>
      <ul className="mt-[8px] px-[30px] flex w-full justify-start overflow-x-scroll flex-wrap">
        {categoriesColors.map((c) => {
          return (
            <li
              className={`mx-1 ${
                !hiddenCategories.includes(c.name)
                  ? "bg-black [&>button]:text-white"
                  : "border-grey bg-grey-light [&>button]:text-grey"
              } border-[2px] rounded-full mb-1 flex justify-center items-center`}
            >
              <button
                className={`px-9 py-[1px] flex justify-center items-center`}
                onClick={() => {
                  handleCategoryFilter(c.name);
                }}
              >
                <div
                  className={`w-[5px] h-[5px] rounded-full mr-2 bg-${c.color}`}
                />
                {c.name}
              </button>
            </li>
          );
        })}
      </ul>
      {events
        .filter((e: any) => {
          return !hiddenCategories.includes(e.category);
        })
        .map((event) => {
          return (
            <li className="list-none">
              <ExploreCard event={event} />
            </li>
          );
        })}
    </div>
  );
};
