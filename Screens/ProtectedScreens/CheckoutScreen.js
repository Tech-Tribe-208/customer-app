import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CheckoutScreen = () => {
  return (
    <View clasName="flex-1 bg-white">
      <View style={{height: hp(12), alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Check Out</Text>
      </View>
      <View style={{marginTop: hp(5), gap: wp(3)}}>
        <Text style={{fontWeight: '700', fontSize: wp(4), marginLeft: wp(2)}}>Choose Payment</Text>
        <View style={{paddingHorizontal: wp(2)}}>
          <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgray', padding: wp(2), borderRadius: wp(2)}}>
            <Image source={require("../../assets/three credit card.png")}/>
            <Text style={{fontWeight: '600', fontSize: wp(4)}}>Card Payment</Text>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: wp(2), marginTop: hp(5)}}>
          <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgray', padding: wp(2), borderRadius: wp(2)}}>
            <Image source={require("../../assets/cash in hand.png")}/>
            <Text style={{fontWeight: '600', fontSize: wp(4)}}>Card Payment</Text>
          </View>
        </View>
    </View>
  )
}

export default CheckoutScreen