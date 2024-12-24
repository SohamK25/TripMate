import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: Colors.BLUE}}>
        <Tabs.Screen name='mytrips'
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon:({color}) => <Ionicons name="airplane-outline" size={25} color={color} />
        }}
        />

        <Tabs.Screen name='discover' 
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon:({color}) => <Ionicons name="planet-outline" size={25} color={color} />
        }}
        />

        <Tabs.Screen name='profile' 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon:({color}) => <Ionicons name="person-outline" size={25} color={color} />
        }}
        />
    </Tabs>
  )
}