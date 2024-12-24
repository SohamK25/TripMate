import { View, Text, FlatList } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelerList } from '../../constants/Options'
import  OptionCard  from '../../components/create/OptionCard';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext'

export default function SelectTraveler() {

    const navigation = useNavigation();
    const [selectedTraveler, setselectedTraveler] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransperent: true,
            headerTitle: ''
        })
    }, [])

    useEffect(() => {
      setTripData({...tripData, travelers: selectedTraveler})
    },[selectedTraveler])

    useEffect(()=> {
      console.log('Success Travellers')
    },[tripData])

  return (
    <View style={{padding: 10, backgroundColor: Colors.WHITE, height: '100%'}}>
      <Text style={{fontFamily: 'outfit-bo', fontSize: 28}}>Who's Travelling</Text>

      <View style={{marginTop: 8}}>
        <Text style={{fontFamily: 'outfit-me', fontSize: 20}}>Select Your Travellers: </Text>

        <FlatList data={SelectTravelerList} 
        renderItem={({item, index}) => (
          <TouchableOpacity style={{marginVertical: 10}}
          onPress={() => setselectedTraveler(item)} >

            <OptionCard option={item} selectedOption={selectedTraveler}/>
          </TouchableOpacity>

        )}
        />
      </View>

      <TouchableOpacity style={{padding:12, backgroundColor: Colors.PRIMARY, borderRadius: 15, marginTop: 10}} onPress={() => router.push('/create-trip/select-dates')}>
        <Text style={{color: Colors.WHITE, textAlign: 'center', fontSize: 20}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}