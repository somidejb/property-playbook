"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { site } from "@/lib/content/site";

const pin = L.divIcon({
  className: "",
  html: `<div style="width:34px;height:34px;position:relative;">
    <svg viewBox="0 0 34 34" width="34" height="34">
      <path d="M17 1c8 0 14 6.2 14 13.8C31 24.5 17 33 17 33S3 24.5 3 14.8C3 7.2 9 1 17 1Z" fill="#1e1038" stroke="#a7cf3a" stroke-width="1.5"/>
      <circle cx="17" cy="14" r="5.5" fill="#a7cf3a"/>
    </svg>
  </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 33],
  popupAnchor: [0, -30],
});

export function ServiceMap() {
  const { lat, lng } = site.brokerage.mapCoordinates;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={12}
      scrollWheelZoom={false}
      className="pp-map h-full w-full"
      attributionControl={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      <Marker position={[lat, lng]} icon={pin}>
        <Popup>
          <div style={{ fontFamily: "sans-serif" }}>
            <strong>{site.brokerage.name}</strong>
            <br />
            {site.brokerage.address}
            <br />
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              Get directions &rarr;
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
