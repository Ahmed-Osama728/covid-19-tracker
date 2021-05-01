import React from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap, Circle, Popup } from 'react-leaflet';
import { showDataOnMap } from './util';

function ChangeMap({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

function Map({ center, zoom, casesType, countries }) {
  return (
    <div className="map">
      <MapContainer>
        <ChangeMap center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}
export default Map;
