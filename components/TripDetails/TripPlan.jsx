import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function TripPlan({ tripPlan }) {
  return (
    <View style={{ marginTop: 25, fontFamily: 'outfit-me', fontSize: 15 }}>
      <Text style={{ fontFamily: 'outfit-me', fontSize: 20 }}> 📋 Plan Details :</Text>

      <View style={{ marginTop: 5 }}>
        {Object.entries(tripPlan).sort().map(([day, dayPlan]) => (
          <View
            key={day}
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 10,
              borderColor: Colors.ORANGE,
              marginTop: 15,
              backgroundColor: Colors.LIGHT_GRAY,
            }}
          >
            <Text style={{ fontSize: 16, fontFamily: 'outfit-bo' }}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </Text>
            
            {['morning', 'afternoon', 'evening'].map((timeOfDay) => (
              <View key={timeOfDay} style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 12, fontFamily: 'outfit-me', color: Colors.RED }}>
                  {timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)}:
                </Text>
                <Text style={{ fontSize: 14, marginLeft: 10 }}>
                  {dayPlan[timeOfDay] || 'No activity planned'}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={{ marginTop: 50 }}></View>
    </View>
  );
}
