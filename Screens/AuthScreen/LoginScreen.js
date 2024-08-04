import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Checkbox from 'expo-checkbox';
import { useNavigation } from '@react-navigation/native';
import apiRequests from '../../api-stuff/apiRequests';

const LoginScreen = () => {
  const navigation = useNavigation();
  
  const [usernameOrPhone, setUsernameOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = {
    username: usernameOrPhone,
    password: password
  }

  const login = async (userInfo) => {
    const response = await apiRequests.login(userInfo);
    console.log(response);
    if(response.status === 200){
      alert('You have logged in successfully');
    }
    else if(response.status === 401){
      alert('Invalid password');
    }
    else if(response.status === 404){
      alert('User not found');
    }
    else{
      alert('An error occured');
    }
  }


  const [isChecked, setChecked] = useState(false);

  return (
    <View style={{marginTop: hp(10)}}>
      <View className="pl-4 gap-1">
        <Text style={{fontSize: 20, fontWeight: '500'}}>Login</Text>
        <Text>Welcome back to the app</Text>
      </View>
      {/**Input Section */}
      <View className="space-y-10" style={{marginTop: hp(6)}} >
        <View className="space-y-3">
          <Text style={{marginLeft: wp(5)}}>Enter Phone number or Username</Text>
          <View className="items-center">
            <TextInput style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='+233 2034474838' value = {usernameOrPhone} onChangeText = {setUsernameOrPhone}/>
          </View>
        </View>
        <View className="space-y-3">
          <Text style={{marginLeft: wp(5)}}>Enter Password</Text>
          <View className="items-center">
            <TextInput textContentType='password' secureTextEntry = {true} style={{borderWidth: 1, borderColor: 'gray', paddingVertical: wp(3.5),paddingHorizontal: wp(1), width: wp(90), borderRadius: wp(2)}} placeholder='*********' value = {password} onChangeText = {setPassword}/>
          </View>
        </View>
      </View>
      <View className="items-end px-4 pt-2">
        <TouchableOpacity onPress={()=> navigation.navigate("verify-email")}><Text className="text-blue-700">Forgot password?</Text></TouchableOpacity>
      </View>
      <View style={{marginTop: hp(4)}} className="items-center px-6">
        <View style={{marginVertical: hp(2)}} className="items-center flex-row">
          <View style={{width: wp(20), height: 1}} className="bg-slate-600" />
          <Text className="mx-4">or continue with</Text>
          <View style={{width: wp(20), height: 1}} className="bg-slate-600" />
        </View>
        <View style={{marginTop: hp(6)}}>
          <Text>By clicking continue, you agree to our Terms of Service and Privacy Policy</Text>
        </View>
        <View style={{marginTop: hp(2)}} className="flex-row items-center space-x-12">
          <Image source={require("../../assets/googleIcon.png")}/>
          <Image source={require("../../assets/AppleIcon.png")}/>
        </View>
        
        <View style={{marginTop: hp(8)}} className="space-y-2 items-center">
          <View className="flex-row items-center space-x-2">
              <Checkbox
                // style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
            <Text>Keep me signed in </Text>
          </View>
          <TouchableOpacity style={{width: wp(65), height: wp(15)}} className="bg-[#0366FF] rounded-full items-center justify-center" onPress = {() => login(userInfo)}>
            <Text className="text-white">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen