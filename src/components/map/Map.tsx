import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "@adamscybot/react-leaflet-component-marker";
import { MarkerIcon } from "../marker/MarkerIcon";
import { UserEvent } from "../../config/events";
import { useState } from "react";

const position: LatLngTuple = [48.135, 11.582];

export const Map = (props: any) => {
  const { events } = props;
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

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
        {events.map((event: UserEvent) => {
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
      ,
    </div>
  );
};
