import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation()
  
  useEffect(()=> {
    setTimeout(()=>{
      navigation.navigate("HomeRoute")
    },2000)
  },[])
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', marginTop: hp(15)}}>
        <Image source={require("../assets/splashlogo.png")}/>
      </View>
      <View style={{alignItems: 'center', marginTop: hp(5)}}>
        <Text style={{fontSize: 24}}>SACRED ADDAE CO.LTD</Text>
        <Text>Supply in general merchandise</Text>
      </View>
    </View>
  )
}

export default Splash