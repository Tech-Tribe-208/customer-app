import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ServiceDetailScreen = () => {
  return (
    <View className="bg-white flex-1">
      <View style={{height: hp(12), alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Checkout</Text>
      </View>
      <View style={{marginTop: hp(2)}} className="items-center">
        <Image style={{width: wp(95), height: hp(20)}} source={{uri: "https://people.com/thmb/GhSXAE2odbpELJoJKpUeOx89-SU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(879x492:881x494)/post-malone-62ea2dfabe444702ac4f498aee63532f.jpg"}}/>
      </View>
      <View className="px-4">
        <View style={{ paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray' }}>
          <Text style={{fontWeight: '700', fontSize: wp(3.7)}}>Dusting</Text>
        </View>
        <View style={{ paddingVertical: hp(2)}}>
          <Text style={{fontWeight: '700', fontSize: wp(3.7)}}>Dusting</Text>
        </View>
      </View>
      <View className="px-4">
        <View style={{borderBottomWidth: 1}} className="pb-5 border-gray-400">
          <View className="bg-gray-400 p-4 rounded-xl">
            <Text style={{fontSize: wp(4)}}>Select our cleaning service for a spotless and 
              refreshing home, where our dedicated team
              ensures thorough cleanliness  and  a 
              welcoming atmosphere, tailored to your satisfaction  
              </Text>
          </View>
        </View>
      </View>
      <View className="px-4">
        <View style={{paddingVertical: hp(1.5)}}><Text>Reviews (4)</Text></View>
        <View style={{borderBottomWidth: 1}} className="pb-5 border-gray-400">
          <View className="bg-gray-400 p-4 rounded-xl">
            <Text style={{fontSize: wp(4)}}>Select our cleaning service for a spotless and 
              refreshing home, where our dedicated team
              ensures thorough cleanliness  and  a 
              welcoming atmosphere, tailored to your satisfaction  
              </Text>
          </View>
        </View>
      </View>
      <View className="items-center justify-center bg-gray-400 flex-1">
        <TouchableOpacity className="items-center justify-center" style={{width: wp(50), height: wp(13), backgroundColor: '#0366FF', borderRadius: 10}}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: wp(3.5)}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ServiceDetailScreen