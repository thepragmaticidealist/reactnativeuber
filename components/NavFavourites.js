import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setOrigin } from '../slices/navSlice';



const NavFavourites = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = [
    {
      id: '123',
      icon: 'home',
      location: 'Home',
      destination: 'Code Street, London, UK'
    },
    {
      id: '234',
      icon: 'briefcase',
      location: 'Work',
      destination: 'London Eye, London, UK'
    },
    
  ]

  return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        ItemSeparatorComponent={() => (
          <View className="bg-gray-200" style={{ height: 0.5}}/>
        )}
        renderItem={({item}) => (
            <TouchableOpacity className="flex-row items-center p-5">
              <Icon 
                className="mr-4 rouned-full bg-gray-400 p-3"
                name={item.icon}
                type='ionicon'
                color="white"
                size={18}
              />
              <View>
                <Text className="font-semibold text-md">{item.location}</Text>
                <Text className="text-gray-500">{item.destination}</Text>
              </View>
            </TouchableOpacity>
        )}
        />
  )
}

export default NavFavourites