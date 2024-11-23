import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "@adamscybot/react-leaflet-component-marker";
import { MarkerIcon } from "../marker/MarkerIcon";
import { UserEvent } from "../../config/events";
import { useState } from "react";
import { categories } from "../../config/categories";

const position: LatLngTuple = [48.135, 11.582];

export const Map = (props: any) => {
  const { events } = props;
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
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
    <div className="h-screen w-screen absolute top-0 left-0 z-[-1] overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        doubleClickZoom={false}
        className="h-full w-full"
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
                  click: () => setActiveMarker(event.id),
                }}
                zIndexOffset={activeMarker === event.id ? 1000 : 0} // Active marker is above
              ></Marker>
            );
          })}
      </MapContainer>
      <div className="absolute bottom-[60px] left-0 w-screen z-[2000]">
        <ul className="flex w-full justify-start overflow-x-scroll">
          {categories.map((c) => {
            return (
              <li
                className={`mx-2 bg-white ${
                  !hiddenCategories.includes(c) ? "border-blue" : "border-black"
                } border-[2px] rounded-full`}
              >
                <button
                  className="px-12 py-1"
                  onClick={() => {
                    handleCategoryFilter(c);
                  }}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
