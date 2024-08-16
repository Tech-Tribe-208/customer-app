import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const OnboardingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: hp(3) }}>
      <Image style={{width: wp(100), height: hp(75)}} source={require("../assets/Rectangle 1.png")} /> 
      <View>
        <View style={{justifyContent: "center",alignItems: "center"}}>
          <Text style={{marginBottom:20,fontSize:25}}>SACRED</Text>
          <Text>Your trusted partners in cleanliness</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("register")} style={{height:50, weight:"50%", backgroundColor:"lightgrey", justifyContent:"center", alignContent:"center", paddingHorizontal:50, marginTop:40, borderRadius:15}}> 
            <Text>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:"space-between",paddingHorizontal:wp(4)}}>
        <View style={{flexDirection:'row',gap:10}}>
          <View style={{padding:8, backgroundColor:"lightgrey", borderRadius:20}}/>
          <View style={{padding:8, backgroundColor:"lightgrey", borderRadius:20}}/>
          <View style={{padding:8, backgroundColor:"lightgrey", borderRadius:20}}/>
        </View>
        <Text>skip</Text>
      </View>
      </View>
    </View>
  )
}

export default OnboardingScreen;