import { useParams } from "react-router-dom";
import { events } from "../../config/events";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "@adamscybot/react-leaflet-component-marker";
import { MarkerIcon } from "../../components/marker/MarkerIcon";
import ReactConfetti from "react-confetti";
import { useAuth } from "../../contexts/authContext";
export const Event = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const { userName, userAge } = useAuth();

  return (
    <div className="absolute z-[] w-screen h-screen overflow-y-hidden">
      <ReactConfetti tweenDuration={10000} />
      <MapContainer
        center={{
          lat: event ? event.latitude : 0.0,
          lng: event ? event.longitude : 0.0,
        }}
        zoom={13}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        className="h-[400px] w-screen"
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={{
            lat: event ? event.latitude : 0.0,
            lng: event ? event.longitude : 0.0,
          }}
          icon={<MarkerIcon event={event} />} // Active marker is above
        ></Marker>
      </MapContainer>
      <div className="flex justify-center w-screen">
        <h1 className="text-black font-bold text-4xl pt-2 pb-2">
          You're in, {userName}!
        </h1>
      </div>
      <div className="flex justify-center w-screen">
        <div className="h-[2px] w-[60vw] bg-black" />
      </div>
      <div className="flex justify-center w-screen">
        <h1 className="text-black font-bold text-3xl pt-2">{event?.name}</h1>
      </div>
      <div className="flex justify-center w-screen px-8">
        <p className="text-black pt-2">{event?.description}</p>
      </div>
    </div>
  );
};
