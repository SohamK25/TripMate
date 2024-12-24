import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_Prompt } from '../../constants/Options'
import { chatSession } from '../../configs/AIModel'
import { useRouter } from 'expo-router'
import { auth, db} from '../../configs/FirebaseConfig';
import { doc, setDoc } from "firebase/firestore";


export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const user = auth.currentUser;


    useEffect(() => {
         GenerateAiTrip()
    }, [])

    const GenerateAiTrip = async() => {
        setLoading(true)
        const FINAL_PROMPT = AI_Prompt
        .replace('{location}', tripData?.locationInfo?.name)
        .replace('{totalDay}', tripData?.noOfDays)
        .replace('{totalNight}', tripData?.noOfDays-1)
        .replace('{traveler}', tripData?.travelers?.title)
        .replace('{budget}', tripData?.budget)
        .replace('{totalDay}', tripData?.noOfDays)
        .replace('{totalNight}', tripData?.noOfDays-1)
    
        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResp = JSON.parse(result.response.text());
        setLoading(false)


        const docId = Date.now().toString();
        const result_ = await setDoc(doc(db, "UserTrip", docId),{
             userEmail : user.email,
             tripPlan : tripResp, 
             tripData : JSON.stringify(tripData),
             docId : docId      
        });
        console.log('success')
        router.push('/(tabs)/mytrips')
        
    }


  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Text style={{ fontFamily: 'outfit-bo', fontSize: 25, textAlign: 'center'}}>Please Wait...</Text>
      <Text style={{ fontFamily: 'outfit-me', fontSize: 22, textAlign: 'center', marginTop: 40}}>We are working to generate your dream trip</Text>

      {/* <Image source={require('../../assets/images/plane3.gif')} style={{width:'100%',height: 300, objectFit: 'cover'}}/> */}

      {loading && <ActivityIndicator size={100} color={Colors.ORANGE} style={{ marginTop: 40}} />}


      <Text style={{textAlign: 'center', fontFamily: 'outfit', fontSize: 18, color: Colors.GRAY, marginTop: 30}}>
        Do not Go Back
      </Text>
    </View>
  )
}