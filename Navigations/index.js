import { NavigationContainer } from "@react-navigation/native";
import ProtectedRouteNavigator from "./ProtectedRoute";
import AuthNavigation from "./AuthRoutes";

const IsAuthenticated = true;

const AppNavigation = ()=> {
  return (
    <NavigationContainer>
      {IsAuthenticated ? <ProtectedRouteNavigator /> : <AuthNavigation/>}
    </NavigationContainer>
  )
}

export default  AppNavigation;