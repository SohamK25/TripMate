import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}) {

  const openExternalLink = () => {
    const url = 'https://www.ixigo.com';
    Linking.openURL(url)
      .catch(err => console.error('Failed to open page', err));
  };

  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontFamily: 'outfit-me', fontSize: 20}}>🎟️ Trip Reservations :</Text>
      <TouchableOpacity style={{fontFamily: 'outfit-me', fontSize: 15, backgroundColor: Colors.ORANGE, padding: 5, borderRadius: 10, width: 150, marginTop: 5, borderColor: Colors.RED}} onPress={openExternalLink}>
        <Text style={{color: Colors.RED, textAlign: 'center'}}>Book Now</Text>
      </TouchableOpacity>
    </View>
  )
}