import { View, Text, Image } from 'react-native'
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data)
  }
  return (
    <View style={{ marginTop: 20, display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center' }}>

      <Image source={{
        uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
          + formatData(trip.tripData).locationInfo?.photoRef
          + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
      }}
        style={{
          width: 100,
          height: 120,
          objectFit: 'cover',
          borderRadius: 10
        }} />

      <View>
        <Text style={{ fontFamily: 'outfit-me', fontSize: 18, color: Colors.RED }}>{trip.tripPlan?.trip_details?.destination}</Text>

        <Text style={{ fontFamily: 'outfit-me', fontSize: 15, color: Colors.ORANGE }}>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>

        <Text style={{ fontFamily: 'outfit-me', fontSize: 15, color: Colors.ORANGE }}>{formatData(trip.tripData).travelers.title}</Text>
        
        <Text style={{ fontFamily: 'outfit-me', fontSize: 15, color: Colors.ORANGE }}>{formatData(trip.tripData).noOfDays } days</Text>
      </View>
    </View>
  )
}