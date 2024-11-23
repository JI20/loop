import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import { Marker } from "@adamscybot/react-leaflet-component-marker";
import { MarkerIcon } from "../marker/MarkerIcon";

const position: LatLngTuple = [48.135, 11.582];

export const Map = () => {
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
        <Marker position={position} icon={<MarkerIcon />}></Marker>
      </MapContainer>
      ,
    </div>
  );
};
