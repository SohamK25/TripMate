import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext'


export default function SearchPlace() {

  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransperent: true,
      headerTitle: ''
    })
  }, [])

  useEffect(() => {
    console.log('Success Place')
  }, [tripData])

  return (
    <View style={{ padding: 20, paddingTop: 40, backgroundColor: Colors.WHITE, height: '100%' }}>
      <Text style={{ fontSize: 25, fontFamily: 'outfit-bo', textAlign: 'center', marginBottom: 30 }}>
        🔍 Search the Destination
      </Text>
      <GooglePlacesAutocomplete
        placeholder='Search Destination'
        fetchDetails={true}
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            }
          })



          router.push('/create-trip/select-traveler');
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'en',
        }}

        styles={{
          textInputContainer: {
            borderWidth: 2,
            borderColor: Colors.GRAY,
            borderRadius: 10,
            marginTop: 15
          }
        }}
      />

    </View>
  )
}