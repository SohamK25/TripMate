import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../../constants/Colors';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';
import { ToastAndroid } from 'react-native';
import  Login  from '../../../components/Login';



export default function SignIn() {

    const navigation = useNavigation();

    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    const onSignIn = () => {
        if(!email && !password){
            ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM)
            return
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                router.replace('/mytrips')
                console.log(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                if(errorCode == 'auth/invalid-credential'){
                    ToastAndroid.show('Invalid Credentials', ToastAndroid.BOTTOM)
                }

            });
    }

    return (
        <View style={{ padding: 15, paddingTop: 50, backgroundColor: Colors.WHITE, height: '100%' }}>
            <TouchableOpacity onPress={() => router.replace(<Login />)}>
                <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
            </TouchableOpacity>
            <Text style={{ fontFamily: 'outfit-bo', fontSize: 25, textAlign: 'center', paddingTop: 40 }}>It's Great to See You Again</Text>

            <Text style={{ fontFamily: 'outfit-bo', fontSize: 25, color: Colors.GRAY, marginTop: 20, textAlign: 'center' }}>Sign-In for New Adventure</Text>

            <View style={{ marginTop: 70 }}>
                <Text style={{ fontFamily: 'outfit', fontSize: 25 }}>Email :</Text>
                <TextInput style={styles.input} onChangeText={(value) => setEmail(value)}
                    placeholder='  please enter your email here'></TextInput>
            </View>

            <View style={{ marginTop: 35 }}>
                <Text style={{ fontFamily: 'outfit', fontSize: 25 }}>Password :</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(value) => setPassword(value)}
                    placeholder=' please enter the password'></TextInput>
            </View>

            <View>
                <TouchableOpacity style={{ padding: 15, backgroundColor: Colors.PRIMARY, borderRadius: 99, marginTop: "20%", borderColor: Colors.WHITE, borderWidth: 1 }} onPress={onSignIn}>
                    <Text style={{ color: Colors.WHITE, textAlign: 'center', fontFamily: 'outfit', fontSize: 17 }}>Sign In</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity style={{ padding: 15, backgroundColor: Colors.WHITE, borderRadius: 99, marginTop: "10%", borderColor: Colors.PRIMARY, borderWidth: 1 }} onPress={() => router.push('auth/sign-up')}>
                    <Text style={{ color: Colors.PRIMARY, textAlign: 'center', fontFamily: 'outfit', fontSize: 17 }}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    input:
        { borderRadius: 15, borderColor: 'gray', borderWidth: 1, marginTop: 10, padding: 20 }
})


