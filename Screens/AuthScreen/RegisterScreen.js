import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [isChecked, setChecked] = useState(false)
  const navigation = useNavigation()
  return (
    <View style={{marginTop: hp(7)}}>
      <View className="items-center gap-1">
        <Text style={{fontSize: 20, fontWeight: '500'}}>Create an account</Text>
        <Text>Enter your email to sign up for this app</Text>
      </View>
      {/**Input Section */}
      <View className="space-y-2" style={{marginTop: hp(4)}} >
        <View className="space-y-3">
          <Text style={{marginLeft: wp(5)}}>Enter Name</Text>
          <View className="items-center">
            <TextInput style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='Enter your full name'/>
          </View>
        </View>
        <View className="space-y-3">
          <Text style={{marginLeft: wp(5)}}>Enter Email Address</Text>
          <View className="items-center">
            <TextInput style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='hello@example.com'/>
          </View>
        </View>
        <View className="space-y-3">
          <Text style={{marginLeft: wp(5)}}>Enter Phone number</Text>
          <View className="items-center">
            <TextInput style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='+233 2034474838'/>
          </View>
        </View>
        <View className="space-y-3">
          <Text style={{marginLeft: wp(5)}}>Enter Password</Text>
          <View className="items-center">
            <TextInput textContentType='password' style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='*********'/>
          </View>
        </View>
      </View>
      <View className="items-end px-4 pt-2"><TouchableOpacity onPress={()=> navigation.navigate("login")}><Text className="text-blue-600">Login <Text>Instead</Text></Text></TouchableOpacity></View>
      <View className="items-center px-6">
        <View style={{marginVertical: hp(2)}} className="items-center flex-row">
          <View style={{width: wp(20), height: 1}} className="bg-slate-600" />
          <Text className="mx-4">or continue with</Text>
          <View style={{width: wp(20), height: 1}} className="bg-slate-600" />
        </View>
        <View>
          <Text>By clicking continue, you agree to our Terms of Service and Privacy Policy</Text>
        </View>
        <View style={{marginTop: hp(2)}} className="flex-row items-center space-x-12">
          <Image source={require("../../assets/googleIcon.png")}/>
          <Image source={require("../../assets/AppleIcon.png")}/>
        </View>
        <View style={{marginTop: hp(2)}} className="flex-row items-center space-x-2">
            <Checkbox
              // style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />
          <Text>Keep me signed in </Text>
        </View>
        <TouchableOpacity style={{width: wp(65), height: wp(15), marginTop: hp(2)}} className="bg-[#0366FF] rounded-full items-center justify-center">
          <Text className="text-white">Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RegisterScreen