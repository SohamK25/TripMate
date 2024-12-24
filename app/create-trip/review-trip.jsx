import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';


export default function ReviewTrip() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
        })
    }, [])
    return (
        <View style={{
            padding: 25,
            paddingTop: 50,
            backgroundColor: Colors.WHITE,
            height: '100%'
        }}>
            <Text style={{ fontFamily: 'outfit-bo', fontSize: 35, marginTop: 30 }}>Review Your Trip</Text>

            <View>
                <Text style={{ fontFamily: 'outfit-me', fontSize: 25, marginTop: 20, marginBottom: 20 }}>
                    Let's Confirm your Selection
                </Text>

                {/* Destination */}
                <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row', gap: 40 }}>
                    <Text style={{ fontSize: 25 }}>📍</Text>
                    <View>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 20, color: Colors.GRAY }}>Destination</Text>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 18 }}>{tripData?.locationInfo?.name}</Text>
                    </View>
                </View>

                {/* Traveler  */}
                <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row', gap: 40 }}>
                    <Text style={{ fontSize: 35 }}>🚌</Text>
                    <View>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 20, color: Colors.GRAY }}>Travelers</Text>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 18 }}>
                            {tripData?.travelers?.title}</Text>
                    </View>
                </View>

                {/* Dates  */}
                <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row', gap: 40 }}>
                    <Text style={{ fontSize: 25 }}>🗓️</Text>
                    <View>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 20, color: Colors.GRAY }}>Travelling Dates</Text>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 18 }}>{moment(tripData?.startDate).format('DD MMM') + ' - ' + moment(tripData?.endDate).format('DD MMM') + " "} ({tripData?.noOfDays} days)</Text>
                    </View>
                </View>

                {/* Budget  */}
                <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row', gap: 40 }}>
                    <Text style={{ fontSize: 25 }}>💲</Text>
                    <View>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 20, color: Colors.GRAY }}>Budget</Text>
                        <Text style={{ fontFamily: 'outfit-me', fontSize: 18 }}>{tripData?.budget}</Text>
                    </View>
                </View>

            </View>

            <TouchableOpacity onPress={() => router.push('/create-trip/generate-trip')}
                style={{ padding: 12, backgroundColor: Colors.PRIMARY, borderRadius: 15, marginTop: 70 }}>
                <Text style={{ color: Colors.WHITE, textAlign: 'center', fontSize: 20 }}>
                    Build My Trip
                </Text>

            </TouchableOpacity>
        </View>
    )
}
