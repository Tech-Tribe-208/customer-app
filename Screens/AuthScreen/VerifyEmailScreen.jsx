import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const VerifyEmailScreen = () => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={{marginTop: hp(10)}} className="items-center">
        <Text style={{fontSize: wp(5), fontWeight: '700'}}>Forget Password?</Text>
        <Text>Enter the email address to get the password reset link</Text>
      </View>
      <View style={{marginTop: hp(3)}} className="space-y-3">
          <Text style={{marginLeft: wp(5), fontWeight: '600'}}>Enter Email Address</Text>
          <View className="items-center">
            <TextInput style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='hello@example.com'/>
          </View>
        </View>
        <View className="items-center" style={{marginTop: hp(4)}}>
          <TouchableOpacity onPress={()=> navigation.navigate("otp")} style={{width: wp(65), height: wp(15)}} className="bg-[#0366FF] rounded-full items-center justify-center">
              <Text className="text-white">Password Reset</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default VerifyEmailScreen