import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../../Screens/ProtectedScreens/HomeScreen';
import BookingScreen from '../../Screens/ProtectedScreens/BookingScreen';
import FavoriteScreen from '../../Screens/ProtectedScreens/FavoriteScreen';
import NotifiactionScreen from '../../Screens/ProtectedScreens/NotifiactionScreen';
import ProfileScreen from '../../Screens/ProtectedScreens/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()

const HomeStackNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home';
        } else if (route.name === 'Booking') {
          iconName = focused ? 'book' : 'book';
        }else if (route.name === 'Favorite') {
          iconName = focused ? 'heart' : 'heart';
        } else if (route.name === 'Notification') {
          iconName = focused ? 'notifications' : 'notifications';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        }
        // You can return any component that you like here!
        return route.name === 'Profile' ? <Entypo name={iconName} size={size} color={color} /> : <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>
      <Tab.Screen options={{headerShown: true, headerTitleAlign: 'center', headerLeft: ()=> <Ionicons name="chevron-back" size={24} color="black" />, headerRight: ()=> <Ionicons name="notifications-outline" size={24} color="black" />}} name='Booking' component={BookingScreen}/>
      <Tab.Screen options={{headerShown: false}} name='Favorite' component={FavoriteScreen}/>
      <Tab.Screen options={{headerShown: false}} name='Notification' component={NotifiactionScreen}/>
      <Tab.Screen options={{headerShown: false}} name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default HomeStackNavigator