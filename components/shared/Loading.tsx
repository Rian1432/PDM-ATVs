import { View, ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import React from 'react'

export default function Loading({...props}: ActivityIndicatorProps) {
  return (
    <View>
      <ActivityIndicator {...props} />
    </View>
  )
}