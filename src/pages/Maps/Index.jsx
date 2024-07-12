import { useEffect, useRef, useState } from 'react'
import {
  GoogleMap,
  InfoWindow,
  Marker,
  Polygon,
  useJsApiLoader,
} from '@react-google-maps/api'
import key from '../../services/key'
import { useQuery } from 'react-query'
import PlantationsApi from '@/api/plantations'
import InfoWindowComponent from './Partials/infoWindow'

export default function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: key,
    googleMapsApiKey: key,
  })
  const mapRef = useRef(null)

  const [selectedMarker, setSelectedMarker] = useState('')
  const [centerMap, setCenterMap] = useState({})

  const { isLoading: loadingPlantations, data: dataPlatations } = useQuery({
    queryKey: ['PlantationMaps'],
    queryFn: () => PlantationsApi.GetAll(),
  })

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

  useEffect(() => {
    setCenterMap({ lat: -15.70088214163691, lng: -42.658634835195876 })
  }, [])

  if (loadingPlantations === true) return <div>Loading</div>
  return (
    <div className="h-93">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerMap}
          zoom={13}
          onLoad={onMapLoad}
          mapTypeId={'satellite'}
        >
          {dataPlatations?.data?.plantations.map((items, index) => (
            <div key={index}>
              <Polygon
                paths={[items?.mapFormatted]}
                options={{
                  strokeColor: generateColor(index),
                  strokeOpacity: 0.8,
                  strokeWeight: 3,
                  fillColor: generateColor(index),
                  fillOpacity: 0.35,
                }}
              />
              <Marker
                position={items?.centerPoint}
                // options={{
                //   icon:
                //     marker.status === 'parked'
                //       ? Parked
                //       : marker.status === 'inair'
                //       ? InAir
                //       : marker.status === 'incident'
                //       ? Incident
                //       : marker.status === 'mission'
                //       ? Mission
                //       : marker.status === 'offline'
                //       ? Offline
                //       : '',
                // }}
                onClick={() => {
                  setSelectedMarker(items)
                }}
              />
            </div>
          ))}
          {selectedMarker && (
            <InfoWindow
              position={selectedMarker?.centerPoint}
              // options={{
              //   pixelOffset: new window.google.maps.Size(0, -40),
              // }}
              onCloseClick={() => setSelectedMarker(false)}
            >
              <InfoWindowComponent />
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </div>
  )
}
