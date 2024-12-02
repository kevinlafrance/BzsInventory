import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/nav/NavigationStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
  );
}

