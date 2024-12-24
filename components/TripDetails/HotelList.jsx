import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function HotelList({hotelList}) {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{fontFamily: 'outfit-me', fontSize: 20}}>🏨 Hotel Recommendations :</Text>

      <FlatList 
      data={hotelList}
      style={{marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
            <View style={{padding: 2,marginRight: 25, width: 250, height:250, backgroundColor: Colors.LIGHT_GRAY, borderRadius: 5, borderColor: Colors.ORANGE, borderWidth: 1}}>
          
            <Text style={{fontFamily: 'outfit-me', fontSize: 25, color: Colors.RED}}>{item.hotel_name}</Text>
            <View style={{marginTop: 10, gap: 5}}>
            <Text style={{fontFamily: 'outfit-bo', marginTop: 3}}>Description: <Text style={{fontFamily: 'outfit-me'}}>{item.description}</Text></Text>
            <Text style={{fontFamily: 'outfit-bo', marginTop: 3}}>Rating: <Text style={{fontFamily: 'outfit-me'}}>⭐ {item.ratings}</Text></Text>
            <Text style={{fontFamily: 'outfit-bo', marginTop: 3}}>Price: <Text style={{fontFamily: 'outfit-me'}}>{item.price}</Text></Text>
            <Text style={{fontFamily: 'outfit-bo', marginTop: 3}}>Address: <Text style={{fontFamily: 'outfit-me'}}>{item.address}</Text></Text>
            </View>
        </View>
      )}
      />
    </View>
  )
}