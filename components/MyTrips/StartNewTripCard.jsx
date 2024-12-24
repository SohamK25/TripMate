import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

  const router = useRouter();

  return (
    <View style={{padding:25, paddingTop:50, alignItems:'center', display: 'flex', gap:20}}>

      <Ionicons name="location-outline" size={30} color="black" />

      <Text style={{fontSize:25, fontFamily: 'outfit-me'}}>NO Trips Planned Yet !</Text>

      <Text style={{fontSize:20, fontFamily: 'outfit', textAlign: 'center', color: Colors.GRAY}}>Ready for your next adventure? 
        Start now and discover the best destinations, accommodations, and places.</Text>

      <TouchableOpacity style={{paddingTop: 25}} onPress={() =>router.push('/create-trip/search-place')}>
        <Text style={{fontFamily: 'outfit-me', fontSize: 20, padding: 15, backgroundColor: Colors.SILVER, borderRadius: 15, paddingHorizontal: 30}}>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  )
}