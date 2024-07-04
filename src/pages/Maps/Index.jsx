import { useRef, useState } from 'react'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polygon,
  useJsApiLoader,
} from '@react-google-maps/api'
import key from '../../services/key'
import { useQuery } from 'react-query'
import MappedAreasApi from '@/api/mappedArea'
import MapsApi from '@/api/map'
import PlantationsApi from '@/api/plantations'

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: key,
    googleMapsApiKey: key,
  })
  const mapRef = useRef(null)

  const [selectedMarker, setSelectedMarker] = useState('')

  const { isLoading, data } = useQuery({
    queryKey: ['Maps'],
    queryFn: () => MapsApi.GetMap(),
  })

  const { isLoading: loadingPlantations, data: dataPlatations } = useQuery({
    queryKey: ['PlantationMaps'],
    queryFn: () => PlantationsApi.GetAll(),
  })
  console.log('PlantationMaps: ', dataPlatations)

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance
    // console.log('mapRefCurrent', mapRef.current)
  }

  const generateColor = (index) => {
    const hue = index * 137.508 // 137.508 é aproximadamente o ângulo dourado em graus
    return `hsl(${hue % 360}, 100%, 50%)`
  }

  if (isLoading === true || loadingPlantations === true)
    return <div>Loading</div>
  return (
    <div className="h-93">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: -15.70088214163691, lng: -42.658634835195876 }}
          zoom={13}
          onLoad={onMapLoad}
          mapTypeId={'satellite'}
        >
          {dataPlatations?.data?.plantations.map((items, index) => (
            <Polygon
              key={index}
              paths={[items?.mapData]}
              options={{
                strokeColor: generateColor(index),
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: generateColor(index),
                fillOpacity: 0.35,
              }}
              // onClick={() => {
              //   setSelectedMarker(triangleCoords)
              // }}
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
      )}
    </div>
  )
}
