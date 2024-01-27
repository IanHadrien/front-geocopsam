import { useRef, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import key from '../../services/key';

export default function Maps () {
  const { isLoaded } = useJsApiLoader({
    id: key,
    googleMapsApiKey: key,
  });
  const [selectedMarker, setSelectedMarker] = useState("");

  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const center = {
    lat: -15.70088214163691,
    lng: -42.658634835195876,
  };

  const kmlCoordinates = "-42.6662014,-15.7221781 -42.6662895,-15.7223487 -42.6663016,-15.7224051 -42.6662828,-15.7225481 -42.6662382,-15.7226146 -42.6661446,-15.7226814 -42.6660348,-15.7228127 -42.665995,-15.7229462 -42.6659631,-15.7230718 -42.6659021,-15.723132 -42.6658253,-15.7231669 -42.6656451,-15.7232748 -42.6654812,-15.7232864 -42.6650278,-15.7234126 -42.6647433,-15.7228479 -42.6662014,-15.7221781";

  // Dividir as coordenadas em pares de latitude e longitude
  const coordinatePairs = kmlCoordinates.split(" ");

  // Formatar as coordenadas no formato desejado
  const formattedCoordinates = coordinatePairs.map((pair) => {
    const [lng, lat] = pair.split(",").map(parseFloat);
    return { lat, lng };
  });

  console.log(formattedCoordinates);

  const allTriangleCoords = [
    [
      { lat: -15.70088214163691, lng: -42.658634835195876 },
      { lat: -15.712161812268716, lng: -42.66307096830767 },
      { lat: -15.717104694958616, lng: -42.667155135773356 },
      { lat: -15.703802189950522, lng: -42.68492208793661 },
    ],
    [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ],
    formattedCoordinates
  ];

  const mapRef = useRef(null);

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };
  console.log("mapRefCurrent", mapRef.current);

  return (
    <div className="h-93">
      {isLoaded && 
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onMapLoad}
          mapTypeId={"satellite"}
        >
          {allTriangleCoords.map((triangleCoords, index) => (
            <Polygon
              key={index}
              paths={triangleCoords}
              options={{
                strokeColor: `#FF000${index}`,
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
              }}
              onClick={() => {
                setSelectedMarker(triangleCoords);
              }}
            />
          ))}
          {/* {selectedMarker && (
            <InfoWindow
              position={selectedMarker.location}
              options={{
                pixelOffset: new window.google.maps.Size(0, -40),
              }}
            >
              <div>
                <h1>location -selectedMarker.name</h1>
                <h1>status - selectedMarker.status</h1>
                <button onClick={() => setSelectedMarker("")}>close</button>
              </div>
            </InfoWindow>
          )} */}
        </GoogleMap>
      }
    </div>
  );
}