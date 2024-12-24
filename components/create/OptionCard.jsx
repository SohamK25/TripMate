import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({ option, selectedOption }) {
    return (
        <View style={[{
            padding: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: Colors.LIGHT_GRAY,
            borderRadius: 15
        }, selectedOption?.id == option?.id && {borderWidth: 3}]}>
            <View>
                <Text
                    style={{ fontFamily: 'outfit-bo', fontSize: 15 }}>
                    {option.title}
                </Text>

                <Text
                    style={{ fontFamily: 'outfit-bo', fontSize: 15, color: Colors.GRAY }}>
                    {option.desc}
                </Text>
            </View>
            <Text
                    style={{ fontFamily: 'outfit-bo', fontSize: 35 }}>
                    {option.icon}
                </Text>
        </View>
    )
}