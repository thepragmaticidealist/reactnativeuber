import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen'
    },
    {
        id: '345',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatsScreen'
    }
]

const NavOptions = () => {
  return (
    <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        horizontal
        renderItem={({item}) => (
            <View className="flex-row items-center justify-between">
                <TouchableOpacity className="p-2 pl-6 pb-4 pt-4 bg-gray-200 m-3.5 w-40 rounded-md">
                    <View>
                        <Image style={{width: 120, height: 120, resizeMode: "contain"}} source={{uri: item.image}} />
                        <Text className="mt-2 text-md font-semibold pl-4 pt-2">{item.title}</Text>
                        <Icon className="p-2 bg-black rounded-full mt-4 w-10 ml-20" name='arrowright' color="white" type='antdesign' />
                    </View>
                    
                </TouchableOpacity>
            </View>
        )}
    />
  )
}

export default NavOptions