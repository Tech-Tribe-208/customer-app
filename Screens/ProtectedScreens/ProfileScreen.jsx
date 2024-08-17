import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-white">
      <View style={{height: hp(10),alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Profile</Text>
      </View>
      <View style={{marginTop:hp(2)}} className="items-center gap-3">
        <Image style={{height: wp(20), width: wp(20), borderRadius: wp(20)}} source={{uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="}}/>
        <Text className="font-bold">Username</Text>
        <Text>Accra</Text>
        <Text>Ghana</Text>
      </View>
      <View className="items-center">
        <View style={{width: wp(90), height: wp(20), marginTop: hp(2), padding: wp(4)}} className="flex-row bg-gray-200 justify-evenly rounded-xl items-center">
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
      <View style={{gap: wp(4)}} className="items-center">
        <TouchableOpacity>
          <View style={{width: wp(90), padding: wp(4)}} className="flex-row items-center justify-between bg-gray-200 rounded-xl">
            <View className="flex-row items-center space-x-4">
              <AntDesign name="hearto" size={24} color="black" />
              <Text>My favorite</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{width: wp(90), padding: wp(4)}} className="flex-row items-center justify-between bg-gray-200 rounded-xl">
            <View className="flex-row items-center space-x-4">
              <Ionicons name="time-outline" size={24} color="black" />
              <Text>Transaction</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{width: wp(90), padding: wp(4)}} className="flex-row items-center justify-between bg-gray-200 rounded-xl">
            <View className="flex-row items-center space-x-4">
              <AntDesign name="gift" size={24} color="black" />
              <Text>My Coupon</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("log-out")}>
          <View style={{width: wp(90), padding: wp(4)}} className="flex-row items-center justify-between bg-gray-200 rounded-xl">
            <View className="flex-row items-center space-x-4">
            <MaterialIcons name="logout" size={24} color="red" />
              <Text className="text-rose-600">Logout</Text>
            </View>
            <Ionicons name="chevron-forward-sharp" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen