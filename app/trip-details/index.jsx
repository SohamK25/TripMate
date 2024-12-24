import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import TripPlan from '../../components/TripDetails/TripPlan';
import NearBy from '../../components/TripDetails/NearBy';


export default function TripDetails() {
  const navigation = useNavigation();
  const {trip} = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);
  
  const formatData = (data) => {
    return JSON.parse(data)
  }

  useEffect(()=> {
    navigation.setOptions({
      headerShown: true,
      headerTransparent : true,
      headerTitle: '',
    });
    setTripDetails(JSON.parse(trip));
}, []);


  return tripDetails &&(
    <View style={{flex:1, backgroundColor: Colors.WHITE,}}>
      <Image source={{
        uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
          + formatData(tripDetails.tripData).locationInfo?.photoRef
          + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
      }}
      style={{
        width: '100%',
        height: 300,
        objectFit: 'cover',
      }} />

      <ScrollView style={{padding: 15, backgroundColor: Colors.WHITE, height: '100%', marginTop: 10}}>
        <Text style={{fontFamily: 'outfit-bo', fontSize: 20}}>{tripDetails?.tripPlan?.trip_details?.destination}</Text>

        <Text style={{fontFamily: 'outfit-bo', fontSize: 15, color: Colors.ORANGE, marginTop: 5}}>Optimal Visit: {tripDetails?.tripPlan?.trip_details?.best_time_to_visit}</Text>

        <View style={{display: 'flex', flexDirection: 'row',gap: 25, marginTop: 10}}>
        <Text style={{fontFamily: 'outfit-me', fontSize: 15, color: Colors.RED}}> 
        {moment(formatData(tripDetails.tripData).startDate).format('DD MMM YYYY')}</Text>

        <Text style={{fontFamily: 'outfit-me', fontSize: 15, color: Colors.RED}}> 
        {moment(formatData(tripDetails.tripData).endDate).format('DD MMM YYYY')}</Text>
        </View>

        <Text style={{fontFamily: 'outfit-me', fontSize: 15, color: Colors.RED, marginTop: 5}}>
        {formatData(tripDetails.tripData)?.travelers.title}</Text>

        <FlightInfo flightData = {tripDetails?.tripPlan?.flight_details?.example_flight} />

        <HotelList hotelList = {tripDetails?.tripPlan?.hotel_options} />

        <NearBy nearByPlaces = {tripDetails?.tripPlan?.nearby_places_to_visit} />
        
        <TripPlan  tripPlan= {tripDetails?.tripPlan?.daily_schedule} />


      
      </ScrollView>
    </View>
  )
}