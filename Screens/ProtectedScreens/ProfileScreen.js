import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProfileScreen = () => {
  return (
    <View>
      <View style={{height: hp(12), alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Profile</Text>
      </View>
      <View style={{marginTop:hp(2)}} className="items-center gap-3">
        <Image style={{height: wp(20), width: wp(20), borderRadius: wp(20)}} source={{uri: "https://platform.vox.com/wp-content/uploads/sites/2/2024/06/gettyimages-2155929715.jpg?quality=90&strip=all&crop=0%2C27.777777777778%2C100%2C44.444444444444&w=2400"}}/>
        <Text className="font-bold">Marrine Gustav</Text>
        <Text>Purwokerto</Text>
        <Text>Indonesia</Text>
      </View>
      <View className="items-center">
        <View style={{width: wp(80), marginTop: hp(2)}} className="flex-row bg-gray-400 justify-evenly p-4 rounded-xl">
          <View className="gap-2 items-center">
            <Text style={{fontWeight: '700', fontSize: wp(7)}}>26</Text>
            <Text>Transaction</Text>
          </View>
          <View className="gap-2 items-center">
            <Text style={{fontWeight: '700', fontSize: wp(7)}}>12</Text>
            <Text>Review</Text>
          </View>
          <View className="gap-2 items-center">
            <Text style={{fontWeight: '700', fontSize: wp(7)}}>6</Text>
            <Text>Bookings</Text>
          </View>
        </View>
      </View>
      <View className="px-8 py-2">
        <Text>Option</Text>
      </View>
      <View className="items-center gap-4">
        <View style={{width: wp(80)}} className="flex-row items-center justify-between bg-gray-400 p-4 rounded-xl">
          <View className="flex-row items-center space-x-4">
            <AntDesign name="hearto" size={24} color="black" />
            <Text>My favorite</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </View>
        <View style={{width: wp(80)}} className="flex-row items-center justify-between bg-gray-400 p-4 rounded-xl">
          <View className="flex-row items-center space-x-4">
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>Transaction</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </View>
        <View style={{width: wp(80)}} className="flex-row items-center justify-between bg-gray-400 p-4 rounded-xl">
          <View className="flex-row items-center space-x-4">
            <AntDesign name="gift" size={24} color="black" />
            <Text>My Coupon</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </View>
        <View style={{width: wp(80)}} className="flex-row items-center justify-between bg-gray-400 p-4 rounded-xl">
          <View className="flex-row items-center space-x-4">
          <MaterialIcons name="logout" size={24} color="red" />
            <Text className="text-rose-600">Logout</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

export default ProfileScreen