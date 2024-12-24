import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from "react-native-calendar-picker";
import { CreateTripContext } from '../../context/CreateTripContext'
import moment from 'moment';
import { TouchableOpacity } from 'react-native';


export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const onDateChange = (date, type) => {
      if (type == 'START_DATE'){
        setStartDate(moment(date))
      }
      else{
        setEndDate(moment(date))
      }
  }

  const onDateSelectContinue = () => {
    if(!startDate && !endDate){
      ToastAndroid.show('Please select dates', ToastAndroid.BOTTOM)
      return;
    }
      const totalNoOfDays = endDate.diff(startDate,'days')
      console.log(totalNoOfDays + 1)
      setTripData({
        ...tripData,
        startDate: startDate,
        endDate: endDate,
        noOfDays: totalNoOfDays + 1
      });

      router.push('/create-trip/select-budget')
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransperent: true,
      headerTitle: ''
    })
  }, [])

  // useEffect(()=> {
  //   console.log('Success Dates')
  // },[tripData])


  return (
    <View style={{
      padding: 20,
      paddingTop: 30,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <Text style={{ fontFamily: 'outfit-bo', fontSize: 30, marginBottom: 30 }}>Travelling Dates</Text>
      <CalendarPicker 
        onDateChange={onDateChange}
        allowRangeSelection={true}
        minDate={new Date()}
        maxRangeDuration={5}
        selectedRangeStyle={{
          backgroundColor: Colors.GRAY
        }}
        selectedDayTextStyle={{
          color: Colors.WHITE
        }}
      />


      {/* <TouchableOpacity onPress={onDateSelectContinue}
      style={{ padding: 12, backgroundColor: Colors.PRIMARY, borderRadius: 15, marginTop: 70 }}>
        <Text style={{ color: Colors.WHITE, textAlign: 'center', fontSize: 20 }}>
          Next
        </Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={onDateSelectContinue}
      style={{ padding: 12, backgroundColor: Colors.PRIMARY, borderRadius: 15, marginTop: 70 }}>
        <Text style={{ color: Colors.WHITE, textAlign: 'center', fontSize: 20 }}>
          Next
        </Text>

      </TouchableOpacity>
    </View>


  )
}