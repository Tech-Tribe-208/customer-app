import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../../Screens/ProtectedScreens/HomeScreen';
import BookingScreen from '../../Screens/ProtectedScreens/BookingScreen';
import FavoritesScreen from '../../Screens/ProtectedScreens/FavoritesScreen';
import NotificationsScreen from '../../Screens/ProtectedScreens/NotificationsScreen';
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
        }else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'heart';
        } else if (route.name === 'Notifications') {
          iconName = focused ? 'notifications' : 'notifications';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user' : 'user';
        }
        
        return route.name === 'Profile' ? <Entypo name={iconName} size={size} color={color} /> : <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
      <Tab.Screen name='Home' options={{headerShown: false}} component={HomeScreen}/>
      <Tab.Screen options={{headerShown: true, headerTitleAlign: 'center', headerRight: ()=> <Ionicons name="notifications-outline" size={24} color="black" />}} name='Booking' component={BookingScreen}/>
      <Tab.Screen options={{headerShown: false}} name='Favorites' component={FavoritesScreen}/>
      <Tab.Screen options={{headerShown: false}} name='Notifications' component={NotificationsScreen}/>
      <Tab.Screen options={{headerShown: false}} name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default HomeStackNavigator