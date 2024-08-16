import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import Splash from '../../Screens/Splash';
import ServiceDetailScreen from '../../Screens/ProtectedScreens/ServiceDetailScreen';
import BookingServiceScreen from '../../Screens/ProtectedScreens/BookingServiceScreen';
import CheckoutScreen from '../../Screens/ProtectedScreens/CheckoutScreen';

const Stack = createStackNavigator();

const ProtectedRouteNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="splash" component={Splash}/>
      <Stack.Screen name="home-route" component={HomeStackNavigator} />
      <Stack.Screen name="service-detail" component={ServiceDetailScreen} />
      <Stack.Screen name="book-service" component={BookingServiceScreen} />
      <Stack.Screen name="checkOut" component={CheckoutScreen} />
    </Stack.Navigator>
  )
}
export default ProtectedRouteNavigator;