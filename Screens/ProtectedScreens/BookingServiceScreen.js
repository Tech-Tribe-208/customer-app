import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BookingServiceScreen = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-white">
      <View style={{height: hp(12), alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Booking Service</Text>
      </View>
      <View style={{marginVertical: hp(2), paddingHorizontal: wp(2)}}>
        <Text>How many hours do you expect the cleaning experts to stay?</Text>
      </View>
      <View className="items-center">
        <View style={{width: wp(97), gap: 2}} className="bg-gray-400 p-1 rounded-xl flex-row">
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-full items-center justify-center" style={{width: wp(10), height: wp(10)}}>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray', marginHorizontal: wp(4)}}>
        <Text>Choose Date & Time</Text>
      </View>
      <View className="flex-row justify-around" style={{paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray', marginHorizontal: wp(4)}}>
        <TouchableOpacity style={{width: wp(40), padding: wp(1.5)}} className="flex-row items-center space-x-2 bg-gray-400 justify-center rounded-xl">
          <Ionicons name="calendar-outline" size={24} color="black" />
          <Text style={{fontWeight: '700',}}>Choose Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: wp(40), padding: wp(1.5)}} className="flex-row items-center space-x-2 bg-gray-400 justify-center rounded-xl">
          <EvilIcons name="clock" size={24} color="black" />
          <Text style={{fontWeight: '700',}}>Choose Time</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center" style={{marginTop: hp(2), marginHorizontal: wp(4)}}>
        <Text>Confirm Address</Text>
        <Image source={require("../../assets/Place Marker.png")}/>
      </View>
      <View className="items-center" style={{paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray'}}>
        <View style={{width: wp(95), padding: wp(1.5), height: hp(10)}} className="flex-row items-center space-x-2 bg-gray-400 justify-center rounded-xl">
          <Text> Office Location: House No. 11 East Legon.</Text>
        </View>
      </View>
      <View className="bg-gray-400 flex-1 p-2">
        <View className="pb-4">
          <Text style={{fontWeight: '700'}}>Service Price</Text>
        </View>
        <View className="space-y-5">
          <View style={{marginHorizontal: wp(15)}} className="flex-row items-center justify-between">
            <Text style={{fontWeight: 'bold'}}>Price</Text>
            <Text style={{fontWeight: 'bold'}}>$300</Text>
          </View>
          <View style={{marginHorizontal: wp(15)}} className="flex-row items-center justify-between">
            <Text style={{fontWeight: 'bold'}}>Hours</Text>
            <Text style={{fontWeight: 'bold'}}>1</Text>
          </View>
          <View style={{marginHorizontal: wp(15)}} className="flex-row items-center justify-between">
            <Text style={{fontWeight: 'bold'}}>Material Usage</Text>
            <Text style={{fontWeight: 'bold'}}>$300</Text>
          </View>
          <View style={{marginHorizontal: wp(15)}} className="flex-row items-center justify-between">
            <Text style={{fontWeight: 'bold'}}>Tax</Text>
            <Text style={{fontWeight: 'bold'}}>$300</Text>
          </View>
          <View style={{marginHorizontal: wp(15)}} className="flex-row items-center justify-between">
            <Text style={{fontWeight: 'bold', color: 'white'}}>Total Price</Text>
            <Text style={{fontWeight: 'bold', color: 'white'}}>$300</Text>
          </View>
        </View>
        <View className="items-center mt-6">
          <TouchableOpacity onPress={()=> navigation.navigate("checkOut")} className="items-center justify-center" style={{width: wp(50), height: wp(13), backgroundColor: '#0366FF', borderRadius: 10}}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: wp(3.5)}}>Check out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BookingServiceScreen