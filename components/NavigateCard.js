import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';


const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

              navigation.navigate("RideOptionsCard")
            }}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
              placeholder="Where to?"
              returnKeyType={"search"}
              isRowScrollable={true}
            />
        </View>
          <NavFavourites />
      </View>
      <View className="flex-row justify-evenly mt-10 py-2 border-top border-gray-100 mt-">
        <TouchableOpacity className="bg-black flex-row w-24 px-4 py-3 rounded-full justify-between" onPress={() => navigation.navigate("RideOptionsCard")}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black flex-row w-24 px-4 py-3 rounded-full justify-between">
          <Icon name="fast-food-outline" type="ionicon" color="white" size={16} />
          <Text className="text-white">Eats</Text>
        </TouchableOpacity>
            
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard