import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'; // provides store to app
import { TailwindProvider } from 'tailwindcss-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <TailwindProvider>
          <HomeScreen />
        </TailwindProvider>
      </SafeAreaProvider>
    </Provider>
  );
}