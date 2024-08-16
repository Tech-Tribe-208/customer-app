import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NotificationsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
      <View style={{height: hp(10), alignItems: 'center', justifyContent: 'center',backgroundColor:'lightgray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Notification</Text>
      </View>
      <View className="px-4 items-center">
        <View style={{backgroundColor: "lightgray", padding: wp(2),width: wp(95), alignItems: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View className="flex-row items-center">
            {/* <View><Image source={require("../../assets/avatarUserprofile.png")}/></View> */}
            <Text className="text-center" style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text>
          </View>
        </View>
        <View style={{ width: wp(95), alignItems: 'center', justifyContent: 'center',  marginTop: hp(2)}}>
          <View style={{backgroundColor: "lightgray", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 15,padding: wp(2)}}>
            {/* <Image source={require("../../assets/books.png")}/> */}
            <View style={{ alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
        <View style={{backgroundColor: "lightgray", padding: wp(4), display: 'flex', width: wp(95), alignItems: 'center', justifyContent: 'center', borderRadius: 15, marginTop: hp(2)}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {/* <Image source={require("../../assets/specialoffersonholidaysale.png")}/> */}
            <View style={{alignContent: 'center', justifyContent: 'center'}}><Text style={{fontSize: wp(3.5)}}>Reminder: Cleaning Appointment Tomorrow "Dear Sarah, this is a friendly reminder that your cleaning appointment is scheduled for tomorrow at 10 AM. Please ensure we have access to the areas you want us to clean. Thank you!"</Text></View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default NotificationsScreen