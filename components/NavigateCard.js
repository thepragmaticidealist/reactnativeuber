import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';

const NavigateCard = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-l py-5 text-center">Good afternoon Mabishi</Text>
      <View className= "border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                backgroundColor: "white",
                paddingTop: 20
              },
              textInput: {
                fontSize: 15,
                borderRadius: 0,
                backgroundColor: "#DDDDDF"
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 20
              }
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en',
            }}
            fetchDetails={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log('DATA',data,'DETAILS >>>>>', details.geometry);

              dispatch(setDestination({
                location: details.geometry.location,
                description: data.description
              }))
            }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
              placeholder="Where to?"
              returnKeyType={"search"}
              isRowScrollable={true}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard