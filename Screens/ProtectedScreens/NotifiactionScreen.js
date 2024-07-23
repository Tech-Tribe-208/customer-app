import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NotifiactionScreen = () => {
  return (
    <View style={{flex: 1, display: 'flex', backgroundColor: 'white'}}>
      <View style={{height: hp(12), alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Notification</Text>
      </View>
      <View className="p-4" style={{backgroundColor: "lightgray", height: hp(20), padding: wp(4), display: 'flex', width: wp(100), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require("../../assets/avatarUserprofile.png")}/>
          <View style={{height: hp(20), alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(4.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
        </View>
      </View>
      <View style={{ height: hp(20), display: 'flex', width: wp(100), alignItems: 'center', justifyContent: 'center',  marginTop: hp(2)}}>
        <View style={{backgroundColor: "lightgray", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 15,padding: wp(2)}}>
          <Image source={require("../../assets/books.png")}/>
          <View style={{height: hp(20), alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(4.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
        </View>
      </View>
      <View className="p-4" style={{backgroundColor: "lightgray", height: hp(20), padding: wp(4), display: 'flex', width: wp(100), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require("../../assets/specialoffersonholidaysale.png")}/>
          <View style={{height: hp(20), alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(4.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
        </View>
      </View>
    </View>
  )
}

export default NotifiactionScreen