import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { Colors } from '../../constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'
import { useRouter } from 'expo-router'

export default function Discover() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(()=> {
    navigation.setOptions({
      headerShown: true,
      headerTransparent : true,
      headerTitle: '',
    });
}, []);
  return (
    <View style={{padding: 25, paddingTop: 50, backgroundColor: Colors.WHITE, height: '100%'}}>
      <Text style={{fontFamily: 'outfit-bo', fontSize: 30, marginBottom: 20}}>Let's Explore the World</Text>

      <Text style={{fontFamily: 'outfit-me', fontSize: 25, marginTop: 50, textAlign: 'justify'}}>
      "TripMate" is your gateway to discovering breathtaking destinations across the globe.   Whether you're seeking adventure, relaxation, or a cultural escape, we bring you the most exciting places to visit, tailored to your interests and budget. Uncover hidden gems, explore popular hotspots, and let your next dream vacation  find you!
      </Text>

      <TouchableOpacity style={{paddingTop: 25, marginTop: 60}} onPress={() =>router.push('/create-trip/search-place')}>
        <Text style={{fontFamily: 'outfit-me', fontSize: 20, padding: 15, backgroundColor: Colors.SILVER, borderRadius: 15, paddingHorizontal: 30}}>Discover Now <Text style={{fontSize: 25}}>  🛫</Text></Text>
      </TouchableOpacity>

    </View>
  )
}