import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function NearBy({nearByPlaces}) {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontFamily: 'outfit-me', fontSize: 20}}> 🧭 Nearby Places :</Text>

      <FlatList 
      data={nearByPlaces}
      style={{marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
            <View style={{padding: 2,marginRight: 25, width: 250, height: 250, backgroundColor: Colors.LIGHT_GRAY, borderRadius: 5, borderColor: Colors.ORANGE, borderWidth: 1}}>
            
                <Text style={{fontFamily: 'outfit-me', fontSize: 25, color: Colors.RED}}>{item.place_name}</Text>
                <Text style={{fontFamily: 'outfit-me'}}>{item.details}</Text>
                <Text style={{fontFamily: 'outfit-bo', marginTop: 5}}> 🎫 Fees: <Text style={{fontFamily: 'outfit-me'}}>{item.ticket_pricing}</Text></Text>
    
                <Text style={{fontFamily: 'outfit-bo', marginTop: 5}}> 🕛 Time Required: <Text style={{fontFamily: 'outfit-me'}}>{item.travel_time}</Text></Text>
      
        </View>
      )}
      />
    </View>
  )
}