import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter();
    return (
        <View>
            <Image source={require('../assets/images/Login.jpeg')}
                style={{
                    width: '100%',
                    height: 550
                }}
                resizeMode="cover"
            />

            <View style={styles.container}>
                <Text style={{ fontSize: 30, fontFamily: 'outfit-bo', textAlign: 'center' }}>
                    TripMate
                </Text>
                <Text style={{ fontSize: 20, fontFamily: 'outfit-me', textAlign: 'center', color: Colors.GRAY, marginTop: 20 }}>
                    "Unlock Your Next Adventure with Precision! "
                </Text>

                <TouchableOpacity style={styles.button} 
                onPress={() => router.push('auth/sign-in')}>
                    <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'outfit', fontSize: 17}}>
                        Let's Go</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 450,
        padding: 25,
        marginTop: -22,
    },

    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: "20%"
    }
})
