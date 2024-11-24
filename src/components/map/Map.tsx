import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "@adamscybot/react-leaflet-component-marker";
import { MarkerIcon } from "../marker/MarkerIcon";
import { UserEvent } from "../../config/events";
import { useState } from "react";
import { categoriesColors } from "../../config/categories";
import { useAuth } from "../../contexts/authContext";

const position: LatLngTuple = [48.135, 11.582];

export const Map = (props: any) => {
  const { events } = props;
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [hiddenCategories, setHiddenCategories] = useState<string[]>([]);
  const { userName, userAge } = useAuth();

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
    <div className="h-screen w-screen absolute top-0 left-0 z-[-1] overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        doubleClickZoom={false}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events
          .filter((e: UserEvent) => {
            return !hiddenCategories.includes(e.category);
          })
          .map((event: UserEvent) => {
            console.log(event);
            return (
              <Marker
                position={{
                  lng: event.longitude,
                  lat: event.latitude,
                }}
                icon={<MarkerIcon event={event} />}
                eventHandlers={{
                  click: () => {
                    setActiveMarker(event.id);
                  },
                }}
                zIndexOffset={activeMarker === event.id ? 2000 : 0} // Active marker is above
              ></Marker>
            );
          })}
      </MapContainer>
      <div className="fixed z-[2000] bg-black rounded-full w-[50px] h-[50px] right-0 top-0 mr-[20px] mt-[20px] flex justify-center items-center">
        <p className="text-white">{userName[0]}</p>
      </div>
      <div className="fixed bottom-[60px] left-0 z-[2000] max-w-[600px]">
        <ul className="flex w-full justify-start overflow-x-scroll flex-wrap">
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
      </div>
    </div>
  );
};
