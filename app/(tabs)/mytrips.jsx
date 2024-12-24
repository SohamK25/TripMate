import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Colors} from '../../constants/Colors';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { db} from '../../configs/FirebaseConfig'
import { auth } from '../../configs/FirebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from '../../components/MyTrips/UserTripList';
import { useRouter } from 'expo-router';
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native';

export default function Mytrips() {
  const user = auth.currentUser;
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const navigation = useNavigation();

  useEffect(()=> {
    navigation.setOptions({
      headerShown: true,
      headerTransparent : true,
      headerTitle: '',
    });
}, []);

  useEffect(() => {
    user && getMyTrips()
  }, [user])

  const getMyTrips= async() =>{
    setLoading(true)
    setUserTrips([]);
    const q =query(collection(db, 'UserTrip'), where('userEmail', '==', user?.email))
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
    setUserTrips(prev => [...prev, doc.data()])
    });
    setLoading(false)
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}> 
      <ScrollView contentContainerStyle={{padding: 10, paddingTop: 35, flexGrow: 1 }}>

      <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between',}}>
      <Text style={{fontSize: 35, fontFamily: 'outfit-bo', textAlign: 'center'}}>
        My Trips 
        </Text>

        <TouchableOpacity onPress={() =>router.push('/create-trip/search-place')}>
        <Text style={{fontFamily: 'outfit-bo', fontSize: 15, padding: 15, backgroundColor: Colors.SILVER, borderRadius: 15, paddingHorizontal: 30}}>New trip</Text>
      </TouchableOpacity>

      </View>
      
      {loading && <ActivityIndicator  size={'large'} color={Colors.BLUE}/>}

      {userTrips ?. length == 0 ?
        <StartNewTripCard />
        :
        <UserTripList  userTrips = {userTrips}/>
      }

    </ScrollView>
    </View>
  )
}

