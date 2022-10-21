import { Image, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import NavOptions from '../components/NavOptions';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import { Dialog } from 'react-native-elements';

const HomeScreen = () => {
  const dispatch = useDispatch();


  return (
    <SafeAreaView className="bg-white h-full">
        <View className="p-5">
          <Image style={{width: 100, height: 100, resizeMode: "contain"}} source={{uri: "https://links.papareact.com/gzs"}}/>
          <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 15
            }
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log('DATA',data,'DETAILS >>>>>', details.geometry);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null))
          }}
            enablePoweredByContainer={false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            placeholder="Where are you now?"
            returnKeyType={"search"}
            isRowScrollable={true}
          />
        <NavOptions />
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen