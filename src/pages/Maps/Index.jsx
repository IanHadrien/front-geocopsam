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

  const containerStyle = {
    width: '100%',
    height: '100%',
  }

  // const kmlCoordinates =
  //   '-42.67110975320763,-15.72504187752949,0 -42.67114032509836,-15.72542832892928,0 -42.67112385156576,-15.72548006548391,0 -42.67113587768306,-15.72561727435942,0 -42.67114498078602,-15.72582452736555,0 -42.6707904409959,-15.72598089597098,0 -42.67023491719818,-15.72625102314443,0 -42.67003897299867,-15.72634706747479,0 -42.66987225867816,-15.72639745691047,0 -42.66976739448944,-15.72574283624953,0 -42.67050020147153,-15.72533475247858,0 -42.67110975320763,-15.72504187752949,0'
  // const coordinatePairs = kmlCoordinates.split(' ')
  // const formattedCoordinates = coordinatePairs.map((pair) => {
  //   const [lng, lat] = pair.split(',').map(parseFloat)
  //   return { lat, lng }
  // })
  // const allTriangleCoords = [
  //   [
  //     { lat: -15.72504187752949, lng: -42.67110975320763 },
  //     { lat: -15.72542832892928, lng: -42.67114032509836 },
  //     { lat: -15.72548006548391, lng: -42.67112385156576 },
  //     { lat: -15.72561727435942, lng: -42.67113587768306 },
  //     { lat: -15.72582452736555, lng: -42.67114498078602 },
  //     { lat: -15.72598089597098, lng: -42.6707904409959 },
  //     { lat: -15.72625102314443, lng: -42.67023491719818 },
  //     { lat: -15.72634706747479, lng: -42.67003897299867 },
  //     { lat: -15.72639745691047, lng: -42.66987225867816 },
  //     { lat: -15.72574283624953, lng: -42.66976739448944 },
  //     { lat: -15.72533475247858, lng: -42.67050020147153 },
  //     { lat: -15.72504187752949, lng: -42.67110975320763 },
  //   ],
  //   [
  //     {
  //       lat: -15.72533475247858,
  //       lng: -42.67050020147153,
  //     },
  //     {
  //       lat: -15.72582452736555,
  //       lng: -42.67114498078602,
  //     },
  //     {
  //       lat: -15.72504187752949,
  //       lng: -42.67110975320763,
  //     },
  //     {
  //       lat: -15.72548006548391,
  //       lng: -42.67112385156576,
  //     },
  //     {
  //       lat: -15.72504187752949,
  //       lng: -42.67110975320763,
  //     },
  //     {
  //       lat: -15.72561727435942,
  //       lng: -42.67113587768306,
  //     },
  //     {
  //       lat: -15.72542832892928,
  //       lng: -42.67114032509836,
  //     },
  //     {
  //       lat: -15.72598089597098,
  //       lng: -42.6707904409959,
  //     },
  //     {
  //       lat: -15.72634706747479,
  //       lng: -42.67003897299867,
  //     },
  //     {
  //       lat: -15.72625102314443,
  //       lng: -42.67023491719818,
  //     },
  //     {
  //       lat: -15.72639745691047,
  //       lng: -42.66987225867816,
  //     },
  //     {
  //       lat: -15.72574283624953,
  //       lng: -42.66976739448944,
  //     },
  //   ],
  //   [
  //     { lat: 25.774, lng: -80.19 },
  //     { lat: 18.466, lng: -66.118 },
  //     { lat: 32.321, lng: -64.757 },
  //     { lat: 25.774, lng: -80.19 },
  //   ],
  //   // formattedCoordinates,
  // ]

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance
    // console.log('mapRefCurrent', mapRef.current)
  }

  if (isLoading === true) return <div>Loading</div>
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
          {data?.data?.maps.map((triangleCoords, index) => (
            // {allTriangleCoords.map((triangleCoords, index) => (
            <Polygon
              key={index}
              paths={triangleCoords}
              options={{
                strokeColor: `#FF000${index}`,
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: '#FF0000',
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
