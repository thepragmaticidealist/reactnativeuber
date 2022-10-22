import { View, Text } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { selectOrigin, selectDestination } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const Map = () => {
    const origin = useSelector(selectOrigin);
    console.log('ORIGIN',origin);
    return (
        <MapView
            className="flex-1"
            mapType="mutedStandard"
            initialRegion= {{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
        }}>
          { origin?.location && (
            <Marker
            coordinate={{ latitude : origin.location.lat , longitude : origin.location.lng }}
            description={origin.description}
            title="Your ride starts here"
            identifier="origin"
            pinColor='#00CCBB'
            />
          )}
        </MapView>
  )
}

export default Map