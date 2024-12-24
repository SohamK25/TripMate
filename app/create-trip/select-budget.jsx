import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectBudgetList } from '../../constants/Options';
import  OptionCard  from '../../components/create/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext'

export default function SelectBudget() {
    const navigation = useNavigation();
    const [selectedBudget, setSelectedBudget] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(()=> {
        navigation.setOptions({
            headerShown: true,
            headerTransperent: true,
            headerTitle: ''
        })
    },[])

    useEffect(() => {
      selectedBudget && setTripData
      ({...tripData, budget: selectedBudget?.title})
      console.log('Success Budget')
    },[selectedBudget])

    const onClickContinue = () => {
      if ( !selectedBudget){
        ToastAndroid.show('Please Select the budget', ToastAndroid.BOTTOM)
        return
      }

      router.push('/create-trip/review-trip')
    }

  return (
    <View style={{
        padding:20,
        paddingTop:20,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Text style={{fontFamily: 'outfit-bo', fontSize: 35}}>Budget</Text>

      <View style={{ marginTop: 20}}> 
        <Text style={{fontFamily: 'outfit-me', fontSize: 25, marginBottom: 30}}>What is your budget for this trip?</Text>

        <FlatList data={SelectBudgetList} 
        renderItem={({item, index}) => (

          <TouchableOpacity style={{marginVertical: 15}}
          onPress={() => setSelectedBudget(item)} >

            <OptionCard option={item} selectedOption={selectedBudget}/>
          </TouchableOpacity>
            )}
        />
      </View>

      <TouchableOpacity style={{padding:12, backgroundColor: Colors.PRIMARY, borderRadius: 15, marginTop: 30}} onPress={() => onClickContinue()}>
        <Text style={{color: Colors.WHITE, textAlign: 'center', fontSize: 20}}>
          Next
        </Text>
      </TouchableOpacity>

    </View>
  )
}