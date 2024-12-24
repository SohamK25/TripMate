import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/FirebaseConfig';
import { ToastAndroid } from 'react-native';


export default function SignUp() {

  const router = useRouter();

  const navigation = useNavigation();

  const [email, setEmal] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(() => {
  navigation.setOptions({
     headerShown: false
 })
  }, [])

  const onCreateAccount = () => {
    if (! email && ! password && ! fullName){
      ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM)
      return
    }
    if (password.length < 6){
      ToastAndroid.show('Password must contain atleast 6 characters', ToastAndroid.BOTTOM)
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    router.replace('/mytrips')
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
  }

  return (
    <View style={{ padding: 15, paddingTop: 45, backgroundColor:Colors.WHITE, height:'100%' }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
      </TouchableOpacity>

      <Text style={{ textAlign: 'center', fontFamily: 'outfit-bo', fontSize: 30, paddingTop:20 }}>Create New Account</Text>

      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: 'outfit', fontSize: 25 }}>Full name :</Text>
        <TextInput style={styles.input} placeholder='  please enter your full name'
        onChangeText={(value) => setFullName(value)}/>
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={{ fontFamily: 'outfit', fontSize: 25 }}>Email :</Text>
        <TextInput style={styles.input} placeholder='  please enter your email here' 
        onChangeText={(value) => setEmal(value)}/>
      </View>

      <View style={{ marginTop: 25 }}>
        <Text style={{ fontFamily: 'outfit', fontSize: 25 }}>Password :</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder=' please enter the password' 
        onChangeText={(value) => setPassword(value)}/>
      </View>

      <View>
          <TouchableOpacity style={{ padding: 15, backgroundColor: Colors.PRIMARY, borderRadius: 99, marginTop: "15%", borderColor: Colors.WHITE, borderWidth: 1 }} onPress={onCreateAccount}>
          <Text style={{ color: Colors.WHITE, textAlign: 'center', fontFamily: 'outfit', fontSize: 17 }}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={{ padding: 15, backgroundColor: Colors.WHITE, borderRadius: 99, marginTop: "10%", borderColor: Colors.PRIMARY, borderWidth: 1 }} onPress={() => router.push ('auth/sign-in')}>
          <Text style={{ color: Colors.PRIMARY, textAlign: 'center', fontFamily: 'outfit', fontSize: 17 }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:
    { borderRadius: 15, borderColor: Colors.GRAY, borderWidth: 1, marginTop: 10, padding: 20 }
})