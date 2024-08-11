import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AppNavigation from './Navigations';
import { AppRegistry } from 'react-native';

export default function App() {
  return (
    <AppNavigation/>
  );
}

AppRegistry.registerComponent("SACRED", ()=> App)