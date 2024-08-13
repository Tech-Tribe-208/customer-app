import { createStackNavigator } from "@react-navigation/stack"
import RegisterScreen from "../../Screens/AuthScreen/RegisterScreen"
import LoginScreen from "../../Screens/AuthScreen/LoginScreen"
import OnboardingScreen from "../../Screens/OnboardingScreen"
import OTPVerificationScreen from "../../Screens/AuthScreen/OTPVerificationScreen"
import VerifyEmailScreen from "../../Screens/AuthScreen/VerifyEmailScreen"
import HomeStackNavigator from "../ProtectedRoute/HomeStackNavigator"
import ServiceDetailScreen from "../../Screens/ProtectedScreens/ServiceDetailScreen"
import BookingServiceScreen from "../../Screens/ProtectedScreens/BookingServiceScreen"
import CheckoutScreen from "../../Screens/ProtectedScreens/CheckoutScreen"


const AuthStack = createStackNavigator()
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="onboard" component={OnboardingScreen}/>
      <AuthStack.Screen name="register" component={RegisterScreen} />
      <AuthStack.Screen name="login" component={LoginScreen}/>
      <AuthStack.Screen name="otp" component={OTPVerificationScreen}/>
      <AuthStack.Screen name="verify-email" component={VerifyEmailScreen}/>
      <AuthStack.Screen name="home" component={HomeStackNavigator}/>
      <AuthStack.Screen name="service-detail" component={ServiceDetailScreen} />
      <AuthStack.Screen name="book-service" component={BookingServiceScreen} />
      <AuthStack.Screen name="checkOut" component={CheckoutScreen} />
      <AuthStack.Screen name="log-out" component={AuthNavigation} />
    </AuthStack.Navigator>
  )
}

export default  AuthNavigation;