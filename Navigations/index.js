import { NavigationContainer } from "@react-navigation/native";
import ProtectedRouteNavigator from "./ProtectedRoute";
import AuthNavigation from "./AuthRoutes";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

const IsAuthenticated = true;

const AppNavigation = ()=> {
  return (
    <NavigationContainer>
      <ExpoStatusBar style = "auto"/>
      {IsAuthenticated ? <ProtectedRouteNavigator /> : <AuthNavigation/>}
    </NavigationContainer>
  )
}

export default  AppNavigation;