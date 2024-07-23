import { createStackNavigator } from "@react-navigation/stack"
import RegisterScreen from "../../Screens/AuthScreen/RegisterScreen"
import LoginScreen from "../../Screens/AuthScreen/LoginScreen"
import OnboardingScreen from "../../Screens/OnboardingScreen"
import OTPVerificationScreen from "../../Screens/AuthScreen/OTPVerificationScreen"
import VerifyEmailScreen from "../../Screens/AuthScreen/VerifyEmailScreen"


const AuthStack = createStackNavigator()
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="onboard" component={OnboardingScreen}/>
      <AuthStack.Screen name="register" component={RegisterScreen} />
      <AuthStack.Screen name="login" component={LoginScreen}/>
      <AuthStack.Screen name="otp" component={OTPVerificationScreen}/>
      <AuthStack.Screen name="verify-email" component={VerifyEmailScreen}/>
    </AuthStack.Navigator>
  )
}

export default  AuthNavigation;