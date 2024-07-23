import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginHorizontal: 20}}>
          <Image style={{height: wp(30), width: wp(30), borderTopLeftRadius: 45, borderBottomRightRadius: 45}} source={{uri: "https://ca-times.brightspotcdn.com/dims4/default/eb40ae9/2147483647/strip/true/crop/2048x1152+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff7%2F91%2Fb9e47d4d3fed8242a988b9ae5843%2Fla-miwood-1481819343-snap-photo"}}/>
          <View style={{justifyContent: 'center', width: wp(65), gap: 4, marginLeft: 10}}>
            <Text style={{marginLeft: 20, fontSize: 20}}>Favour</Text>
            <Text>i’ve been specialising for office claening
            for over three years</Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 24, fontWeight: '700', marginVertical: hp(2), marginLeft: wp(5)}}>Space size</Text>
        </View>
        <View>
          <Image style={{width: wp(100), height: hp(65)}} source={require("../../assets/Rectangle 9.png")}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', width: wp(70), paddingHorizontal: wp(4), height: hp(5),backgroundColor: 'gray', marginTop: hp(3), left: wp(10), alignItems: 'center', borderRadius: 20}}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>20ft</Text>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>20ft</Text>
          </View>
          <Image style={{position: 'absolute',marginTop: hp(12), left: wp(1.5)}} source={require("../../assets/calendar.png")}/>
          <TouchableOpacity onPress={()=> navigation.navigate("book-service")} style={{justifyContent: 'center', position: 'absolute', width: wp(70),height: hp(5),backgroundColor: 'gray', left: wp(15), alignItems: 'center', borderRadius: 20, bottom: hp(8)}}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>Book        Now</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default BookingScreen