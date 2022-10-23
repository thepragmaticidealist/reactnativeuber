import { View, Text, SafeAreaView, TouchableOpacity, FlatList, TextComponent, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  console.log('Selected', selected)

  const data = [
    {
      id: "Uber-X",
      name: "UberX",
      multiplier: 1,
      image: 'https://links.papareact.com/3pn'
    },
    {
      id: "Uber-XL",
      name: "UberXL",
      multiplier: 1.2,
      image: 'https://links.papareact.com/5w8'
    },
    {
      id: "Uber-LUX",
      name: "UberLUX",
      multiplier: 1.75,
      image: 'https://links.papareact.com/7pf'
    },
  ]

  return (
    <SafeAreaView className="bg-white flex-grow">
    <View className="">
      <TouchableOpacity className="absolute top-3 left-5 p-3 rounded-full" >
        <Icon 
          name="chevron-left"
          type='fontawesome'
          color="black"
          onPress={()=> navigation.navigate("NavigateCard")}
        />
      </TouchableOpacity>
      <Text className="text-center text-lg py-5">Select a Ride</Text>
    </View>
    <FlatList
      keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => (
            <TouchableOpacity className="flex-row items-center justify-between px-10" onPress={() => setSelected(item)}>
              <Image style={{width: 100, height: 100, resizeMode: "contain"}} source={{uri: item.image}}/>
              <View className="-ml-6">
                <Text className="text-xl font-semibold">{item.name}</Text>
                <Text>Travel Time ...</Text>
              </View>
              <Text className="text-xl">$99</Text>
            </TouchableOpacity>
        )}
    />
    <View>
      <TouchableOpacity className="bg-black py-3 m-3">
        <Text className="text-center text-xl text-white">Choose {selected?.name}</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard