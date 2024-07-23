import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OTPTextView from 'react-native-otp-textinput';

const OTPVerificationScreen = () => {
  return (
    <View>
      <View style={{marginTop: hp(10)}} className="space-y-2 px-4">
        <Text style={{fontWeight: '700', fontSize: wp(8)}}>OTP Verification</Text>
        <Text>Enter the verification code we just sent on your 
        phone number.</Text>
      </View>
      <OTPTextView containerStyle={{paddingHorizontal: wp(10), marginTop: hp(4)}} inputCellLength={1} textInputStyle={{borderWidth: 1}} autoFocus={true} offTintColor="blue" handleTextChange={()=> console.log("text change")} />

        <View style={{marginTop: hp(2)}} className="items-center">
          <TouchableOpacity style={{width: wp(65), height: wp(15), marginTop: hp(2)}} className="bg-[#0366FF] rounded-full items-center justify-center">
            <Text className="text-white">Verify</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: hp(3)}} className="items-center space-y-1">
          <Text style={{fontSize: wp(3.7), fontWeight: '700'}}>Resend OTP in 23s</Text>
          <Text>Resend  OTP</Text>
        </View>
    </View>
  )
}

export default OTPVerificationScreen