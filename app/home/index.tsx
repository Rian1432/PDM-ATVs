import { Stack } from 'expo-router'
import { View, Text } from 'react-native'
import React from 'react'

import HeaderRight from '@/components/headers/HeaderRight'
import globalStyles from '@/constants/GlobalStyles'

export default function index() {
  return (
    <View style={globalStyles.pageContainer}>
        <Stack.Screen
            options={{
                title: "Home",
                headerRight: () => <HeaderRight />,
            }}
        />

        <Text>index</Text>
    </View>
  )
}