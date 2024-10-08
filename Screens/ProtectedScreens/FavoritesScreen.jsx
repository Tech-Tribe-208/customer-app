import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FavoritesScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: "white"}}>
      <View style={{height: hp(10), alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', width: wp(100),borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5)}}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2)}}>Favorites</Text>
      </View>
      <View style={{marginHorizontal: wp(7), marginTop: wp(5)}}>
        <Text>Discounts In Favorites</Text>
      </View>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image source={require("../../assets/cleanerMan.png")}/>
        </View>
        <View style={{backgroundColor: 'lightgray', flexDirection: 'row', justifyContent: 'space-between', paddingTop: hp(3), paddingBottom: hp(1), paddingHorizontal: wp(3)}}>
          <View style={{gap: wp(4)}}>
            <Text style={{fontWeight: '700'}}>1000GH₵/hr</Text>
            <Text style={{fontWeight: '700'}}>Full House Cleaning</Text>
          </View>
          <View>
            <Image source={require("../../assets/discountCard.png")}/>
            <Text style={{position: 'absolute', left: wp(7), fontWeight: '700'}}>30% Off</Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: hp(1), marginHorizontal: wp(5)}}>
        <Text>Favorites</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: wp(5)}}>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image source={require("../../assets/Homecleaningpic.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>100GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Home Cleaning</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image source={require("../../assets/OffClean.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>30GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Office Cleaning</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: wp(5), marginTop: wp(4)}}>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image source={require("../../assets/Surface Sanitation.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>60GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Surface Sanitation</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image style={{height: hp(18)}} source={require("../../assets/Mopping.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>70GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Mopping</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: wp(5), marginTop: wp(4)}}>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image source={require("../../assets/Trash Removal.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>80GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Trash Removal</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image style={{height: hp(20)}}source={require("../../assets/light Maintenance.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>50GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>light Maintenance</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: wp(5), marginTop: wp(4)}}>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image style={{height: hp(20)}} source={require("../../assets/Event Cleanup.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>30GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Event Cleanup</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
          <View style={{width: wp(41), overflow: "hidden"}}>
            <Image style={{height: hp(20)}} source={require("../../assets/Disinfection Service.jpeg")}/>
            <View style={{backgroundColor: 'lightgray', height: hp(7), padding: wp(2), gap: 4, borderBottomLeftRadius: wp(4), borderBottomRightRadius: wp(4)}}>
              <Text style={{fontWeight: '700'}}>65GH₵/hr</Text>
              <Text style={{fontWeight: '700'}}>Disinfection Service</Text>
            </View>
            <View style={{position: 'absolute', flexDirection: 'row', alignItems: 'center', gap: 4, marginLeft: wp(2), backgroundColor: '#292D32', borderRadius: wp(5), width: wp(15),margin: wp(2)}}>
              <AntDesign name="star" size={wp(5)} color="orange" />
              <Text style={{fontWeight: '700', color: 'white'}}>5.0</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default FavoritesScreen