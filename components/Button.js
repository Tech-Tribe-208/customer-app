import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Button = ({children}) => {
  return (
    <TouchableOpacity style={{width: wp(65), height: wp(15)}} className="bg-[#0366FF] rounded-full items-center justify-center">
      <Text className="text-white">{children}</Text>
    </TouchableOpacity>
  )
}

export default Button