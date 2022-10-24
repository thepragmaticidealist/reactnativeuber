import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { selectOrigin, selectDestination, setTravelTimeInformation, selectTravelTimeInformation } from '../slices/navSlice'
import { useDispatch, useSelector } from 'react-redux';
import { GOOGLE_MAPS_API_KEY } from '@env';


const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const dispatch = useDispatch();



    const mapRef = useRef(null);

    // Zoom and fit map to origin amd destination
    useEffect(() => {
      if (!origin || !destination) return; 
      mapRef.current.fitToSuppliedMarkers(["origin, destination"], {
        edgePadding: { top: 50, right: 50, left: 50, bottom: 50 }
      })
    }, [origin, destination])

    useEffect(() => {
      if (!origin || !destination) return; 
      
      const getTravelTime = async () => {
        fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}
         &destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`
         )
         .then(res => res.json())
         .then(data => {
          // const info = data.rows[0].elements[0]
          // console.log('INFO', info)
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))         
        });
      };

      getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_API_KEY])

    return (
        <MapView
            ref={mapRef}
            className="flex-1"
            mapType="mutedStandard"
            initialRegion= {{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}>
          {
            origin && destination && (
              <MapViewDirections
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_API_KEY}
                strokeColor="black"
                strokeWidth={3}
              />
            )
          }
          { origin?.location && (
              <Marker
                coordinate={{ latitude : origin.location.lat , longitude : origin.location.lng }}
                description={origin.description}
                title="Your ride starts here"
                identifier="origin"
              />
            )
          }
          { destination?.location && (
              <Marker
                coordinate={{ latitude : destination.location.lat , longitude : destination.location.lng }}
                description={destination.description}
                title="Your ride ends here"
                identifier="destination"
              />
            )
          }
        </MapView>
  )
}

export default Map