import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const BookingServiceScreen = () => {
  const navigation = useNavigation();
  const [selectedNumber, setSelectedNumber] = useState(1); // Default to 1
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const handleNumberPress = (number) => {
    setSelectedNumber(number);
  };

  

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    console.log("clicked");
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ height: hp(12), alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', width: wp(100), borderBottomRightRadius: wp(5), borderBottomLeftRadius: wp(5) }}>
        <Text style={{ color: 'white', fontWeight: '600', fontSize: wp(5), marginTop: hp(2) }}>Booking Service</Text>
      </View>

      <View style={{ marginVertical: hp(2), paddingHorizontal: wp(4) }}>
        <Text>How many hours do you expect the cleaning experts to stay? </Text>
      </View>

      <View className="items-center">
        <View style={{ width: wp(97), gap: 2 }} className="bg-gray-400 p-1 rounded-xl flex-row">
          {[...Array(9)].map((_, index) => {
            const number = index + 1;
            return (
              <TouchableOpacity
                key={number}
                className="rounded-full items-center justify-center"
                style={{
                  width: wp(10),
                  height: wp(10),
                  backgroundColor: selectedNumber === number ? 'grey' : 'white',
                }}
                onPress={() => handleNumberPress(number)}
              >
                <Text style={{ color: selectedNumber === number ? 'white' : 'black' }}>{number}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <View style={{ paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray', marginHorizontal: wp(4) }}>
        <Text>Choose Date & Time</Text>
      </View>

      <View className="flex-row justify-around" style={{ paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray', marginHorizontal: wp(4) }}>
        <TouchableOpacity onPress={showDatePicker} style={{ width: wp(40), padding: wp(1.5) }} className="flex-row items-center space-x-2 bg-teal-400 justify-center rounded-xl">
          <Ionicons name="calendar-outline" size={24} color="black" />
          <Text style={{ fontWeight: '700' }}>Choose Date</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showTimePicker} style={{ width: wp(40), padding: wp(1.5) }} className="flex-row items-center space-x-2 bg-gray-400 justify-center rounded-xl">
          <EvilIcons name="clock" size={24} color="black" />
          <Text style={{ fontWeight: '700' }}>Choose Time</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <View className="flex-row justify-between items-center" style={{ marginTop: hp(2), marginHorizontal: wp(4) }}>
        <Text>Confirm Address</Text>
        <Image source={require("../../assets/Place Marker.png")} />         
      </View>

      <View className="items-center" style={{ paddingVertical: hp(2), borderBottomWidth: 1, borderColor: 'lightgray' }}>
        <View style={{ width: wp(95), padding: wp(1.5), height: hp(10) }} className="flex-row items-center space-x-2 bg-gray-400 justify-center rounded-xl">
          <Text> Office Location: House No. 11 East Legon.</Text>
        </View>
      </View>

      <View className="bg-gray-400 flex-1 p-2">
        <View className="pb-4">
          <Text style={{ fontWeight: '700' }}>Service Price</Text>
        </View>
        <View className="space-y-5">
          <View style={{ marginHorizontal: wp(15) }} className="flex-row items-center justify-between">
            <Text style={{ fontWeight: 'bold' }}>Price</Text>
            <Text style={{ fontWeight: 'bold' }}>$300</Text>
          </View>
          <View style={{ marginHorizontal: wp(15) }} className="flex-row items-center justify-between">
            <Text style={{ fontWeight: 'bold' }}>Hours</Text>
            <Text style={{ fontWeight: 'bold' }}>{selectedNumber}</Text>
          </View>
          <View style={{ marginHorizontal: wp(15) }} className="flex-row items-center justify-between">
            <Text style={{ fontWeight: 'bold' }}>Material Usage</Text>
            <Text style={{ fontWeight: 'bold' }}>$300</Text>
          </View>
          <View style={{ marginHorizontal: wp(15) }} className="flex-row items-center justify-between">
            <Text style={{ fontWeight: 'bold' }}>Tax</Text>
            <Text style={{ fontWeight: 'bold' }}>$300</Text>
          </View>
          <View style={{ marginHorizontal: wp(15) }} className="flex-row items-center justify-between">
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Total Price</Text>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>$300</Text>
          </View>
        </View>
        <View className="items-center mt-6">
          <TouchableOpacity onPress={() => navigation.navigate("checkOut")} className="items-center justify-center" style={{ width: wp(50), height: wp(13), backgroundColor: '#0366FF', borderRadius: 10 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: wp(3.5) }}>Book now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookingServiceScreen;
