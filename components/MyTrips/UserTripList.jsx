import { View, Text, Image } from 'react-native'
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
// import UserTripCard from './UserTripCard';

export default function UserTripList({ userTrips }) {
  const router = useRouter();

  return (
    <View>
      <View style={{ marginTop: 25 }}>
        {userTrips.map((trip, index) => {
          const LastTrip = JSON.parse(trip.tripData); // Assuming you need to parse trip data for each entry

          return (
            <View key={index}>
              {LastTrip?.locationInfo?.photoRef ?
                <Image source={{
                  uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
                    + LastTrip?.locationInfo?.photoRef
                    + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY
                }}
                  style={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: 15
                  }} />
                :
                <Image source={require('../../assets/images/globe.jpg')}
                  style={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: 15
                  }}
                />
              }

              <View style={{ marginTop: 10 }}>
                <Text style={{ fontFamily: 'outfit-me', fontSize: 20, color: Colors.RED }}>
                  📍 {trip?.tripPlan?.trip_details?.destination}
                </Text>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                  <Text style={{ fontFamily: 'outfit-me', fontSize: 15, color: Colors.ORANGE }}>
                    🗓️ {moment(LastTrip.startDate).format('DD MMM YYYY')}
                  </Text>

                  <Text style={{ fontFamily: 'outfit-me', fontSize: 15, color: Colors.ORANGE }}>
                    🚌 {LastTrip.travelers.title}
                  </Text>
                </View>

                {/* View Trip Button for each entry */}
                <TouchableOpacity style={{ marginTop: 10, marginBottom:50,}}>
                  <Text style={{
                    fontFamily: 'outfit-me', fontSize: 15, color: Colors.WHITE,
                    backgroundColor: Colors.GRAY, padding: 10, borderRadius: 10, textAlign: 'center'
                  }} onPress={() => router.push({
                    pathname: '/trip-details',
                    params: { trip: JSON.stringify(trip) }
                  })}>
                    View Trip
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Render UserTripCard once for each trip */}
              {/* <UserTripCard trip={trip} /> */}
            </View>
          );
        })}
      </View>
    </View>
  );
}
