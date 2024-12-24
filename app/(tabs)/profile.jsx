import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import { auth } from '../../configs/FirebaseConfig'
import { signOut } from 'firebase/auth';

export default function Profile() {
   
    const [email, setEmail] = useState('');
    const router = useRouter();

    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            
            setEmail(currentUser.email || 'No Email');
        }
    }, []);

    const onSignOut = () => {
        signOut(auth)
            .then(() => {
                router.replace('/auth/sign-in');
            })
            .catch((error) => {
                console.error("Sign-out error: ", error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{email}</Text>
            </View>
            <TouchableOpacity style={styles.signOutButton} onPress={onSignOut}>
                <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bo',
        textAlign: 'center',
        marginVertical: 20,
        color: Colors.PRIMARY,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    label: {
        fontSize: 18,
        fontFamily: 'outfit',
        color: Colors.GRAY,
    },
    value: {
        fontSize: 18,
        fontFamily: 'outfit',
        color: Colors.RED,
    },
    signOutButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 99,
        marginTop: 40,
    },
    signOutText: {
        color: Colors.WHITE,
        textAlign: 'center',
        fontFamily: 'outfit',
        fontSize: 17,
    },
});
