import key from '@/services/key'
import { GoogleMap, Polygon, useJsApiLoader } from '@react-google-maps/api'
import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {} from 'react-icons/fa'
import { IoMapOutline } from 'react-icons/io5'
import { FaMapMarkerAlt, FaRegUser, FaArrowLeft, FaPhone } from 'react-icons/fa'
import { useQuery } from 'react-query'
import MapsApi from '@/api/map'

function calculateCentroid(coordinates) {
  let centroid = { lat: 0, lng: 0 }
  const numPoints = coordinates.length

  coordinates.forEach((point) => {
    centroid.lat += point.lat
    centroid.lng += point.lng
  })

  centroid.lat /= numPoints
  centroid.lng /= numPoints

  return centroid
}

export default function AreasMapView() {
  const { isLoaded } = useJsApiLoader({
    id: key,
    googleMapsApiKey: key,
  })
  const mapRef = useRef(null)

  const navigate = useNavigate()
  const location = useLocation()
  const { dataView } = location.state || {}

  const { isLoading, data } = useQuery(
    'AreasMapsAll',
    () => MapsApi.GetMapId(dataView?.id),
    {
      keepPreviousData: true,
    }
  )

  const onMapLoad = (mapInstance) => {
    mapRef.current = mapInstance
  }

  if (!isLoaded || isLoading === true) return <div>Loading</div>
  return (
    <div className="grid grid-cols-[250px,1fr]">
      <div className="border">
        <div className="p-2 pt-4 border-b-2 flex justify-between">
          <button onClick={() => navigate('/areas-map')}>
            <FaArrowLeft size={18} />
          </button>
          <div className="font-medium text-lg">Visualizar mapa</div>
          <div />
        </div>
        <div className="space-y-3 p-2">
          <div>
            <p className="flex items-center">
              <span className="mr-1">
                <IoMapOutline size={18} />
              </span>
              Área
            </p>
            <p className="text-gray-500 text-sm">{dataView?.name}</p>
          </div>
          <div>
            <p className="flex items-center">
              <span className="mr-1">
                <FaMapMarkerAlt size={18} />
              </span>
              Perímetro total
            </p>
            <p className="text-gray-500 text-sm">
              {dataView?.total_area === ''
                ? 'Não definido'
                : dataView?.total_area}
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <span className="mr-1">
                <FaRegUser size={18} />
              </span>
              Nome do proprietário
            </p>
            <p className="text-gray-500 text-sm">{dataView?.user?.name}</p>
          </div>
          <div>
            <p className="flex items-center">
              <span className="mr-1">
                <FaPhone size={18} />
              </span>
              Contato do proprietário
            </p>
            <p className="text-gray-500 text-sm">{dataView?.user?.phone}</p>
          </div>
        </div>
      </div>
      <div className="h-93">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
            }}
            center={calculateCentroid(data?.data.maps[0])}
            zoom={18}
            onLoad={onMapLoad}
            mapTypeId={'satellite'}
          >
            <Polygon
              paths={data?.data?.maps}
              options={{
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
              }}
              // onClick={() => {
              //   setSelectedMarker(triangleCoords)
              // }}
            />
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
    </div>
  )
}
