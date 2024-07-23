import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const OnboardingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/Rectangle 1.png")} /> 
      <View style={{justifyContent: "center",alignItems: "center"}}>
        <Text style={{marginBottom:20,fontSize:25}}>SACRED</Text>
        <Text>Your trusted partners in cleanliness</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("register")} style={{height:50, weight:"50%", backgroundColor:"lightgrey", justifyContent:"center", alignContent:"center", paddingHorizontal:50, marginTop:40, borderRadius:15}}> 
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:"space-between", marginTop:70,paddingHorizontal:10}}>
        <View style={{flexDirection:'row',gap:10}}>
          <View style={{padding:8, backgroundColor:"lightgrey", borderRadius:20}}/>
          <View style={{padding:8, backgroundColor:"lightgrey", borderRadius:20}}/>
          <View style={{padding:8, backgroundColor:"lightgrey", borderRadius:20}}/>
        </View>
        <Text>skip</Text>
      </View>
    </View>
  )
}

export default OnboardingScreen;