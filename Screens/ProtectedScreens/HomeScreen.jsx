import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: hp(5), flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(4)}}>
        <Image style={{height: wp(10), width: wp(10), borderRadius: wp(10)}} source={{uri: "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="}}/>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <View style={{alignItems: 'center', gap: 10, marginTop: hp(1)}}>
        <Text style={{fontSize: 24, fontWeight: '700',}}>Welcome</Text>
        <Text>Last cleaning 18 days ago</Text>
        <Text>The nearest cleaning</Text>
      </View>
      <View style={{ height: hp(30), alignItems: 'center', marginTop: hp(2)}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, height: '50%', backgroundColor: '#FCD116', width: "95%", borderTopLeftRadius: 100, justifyContent: 'center'}}>
          <Ionicons name="calendar-outline" size={24} color="black" />
          <Text>06/19/24,5:50 pm</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, height: '50%', backgroundColor: 'lightgray', width: "95%", borderBottomRightRadius: hp(30), paddingHorizontal: wp(5)}}>
          <View style={{paddingRight: wp(5), borderRightWidth: 2}}>
            <Text style={{fontWeight: '700', fontSize: wp(5)}}>Cleaner</Text>
            <Text style={{fontWeight: '700', fontSize: wp(5)}}>Emmanuel</Text>
          </View>
          <View style={{paddingRight: wp(5), borderRightWidth: 2}}>
            <Text style={{fontWeight: '700', fontSize: wp(5)}}>Price</Text>
            <Text style={{fontWeight: '700', fontSize: wp(5)}}>$104</Text>
          </View>
          <View>
            <Text style={{fontWeight: '700', fontSize: wp(5)}}>Room</Text>
            <Text style={{fontWeight: '700', fontSize: wp(5)}}>bathroom</Text>
          </View>
        </View>
      </View>
      <View style={{marginLeft: wp(10), marginTop: hp(3)}}>
        <Image source={require("../../assets/Category.png")}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigation.navigate("service-detail")} style={{ marginVertical: hp(3), alignItems: 'center'}}>
          <Image source={require("../../assets/CleaningService.png")}/>
          <Text style={{fontSize: 14, fontWeight: '700', marginTop: wp(5)}}>Office Cleaning</Text>
        </TouchableOpacity>
        <View style={{ marginVertical: hp(3), alignItems: 'center'}}>
          <Image source={require("../../assets/Duster.png")}/>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Office Cleaning</Text>
        </View>
        <View style={{ marginVertical: hp(3), alignItems: 'center'}}>
          <Image source={require("../../assets/Clean.png")}/>
          <Text style={{fontSize: 14, fontWeight: '700'}}>Office Cleaning</Text>
        </View>
      </View>
      <View style={{paddingLeft:30}}>
          <Image source={require("../../assets/Picture1.png")}/>
      </View>
      {/* <View style={{flexDirection: 'row', justifyContent:"space-around", alignItems: 'center'}}>
        <View style={{ alignItems: 'center'}}>
          <Image style={{height: wp(17), width: wp(17), borderRadius: 25}} source={{uri: "https://ca-times.brightspotcdn.com/dims4/default/eb40ae9/2147483647/strip/true/crop/2048x1152+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff7%2F91%2Fb9e47d4d3fed8242a988b9ae5843%2Fla-miwood-1481819343-snap-photo"}}/>
          <Text>Edward</Text>
          <Text>Window Cleaning</Text>
        </View>
        <View style={{ alignItems: 'center'}}>
        <Image style={{height: wp(17), width: wp(17), borderRadius: 25}} source={{uri: "https://ca-times.brightspotcdn.com/dims4/default/eb40ae9/2147483647/strip/true/crop/2048x1152+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff7%2F91%2Fb9e47d4d3fed8242a988b9ae5843%2Fla-miwood-1481819343-snap-photo"}}/>
          <Text>vera</Text>
          <Text>Maintenance Reporting</Text>
        </View>
        <View style={{ alignItems: 'center'}}>
        <Image style={{height: wp(17), width: wp(17), borderRadius: 25}} source={{uri: "https://ca-times.brightspotcdn.com/dims4/default/eb40ae9/2147483647/strip/true/crop/2048x1152+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff7%2F91%2Fb9e47d4d3fed8242a988b9ae5843%2Fla-miwood-1481819343-snap-photo"}}/>
          <Text>favour</Text>
          <Text>Dusting</Text>
        </View>
      </View> */}
      <View>

      </View>
    </ScrollView>
  )
}

export default HomeScreen