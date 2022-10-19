import { Provider } from 'react-redux'; // provides store to app
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';


import store from './store';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
    
  );
}