import { View, Text, StyleSheet, ViewProps } from 'react-native'
import React from 'react'
import Loading from '../shared/Loading'

type LoadableContainerProps = {
    isLoading: boolean
    children: React.ReactNode
    props?: ViewProps
}

export default function LoadableContainer({isLoading, children, ...props}: LoadableContainerProps) {
  return (
    isLoading 
    ?
        (
            <View style={{ marginHorizontal: 30 }}>
                <Loading size={40} /> 
            </View>
        )
    :
        (
            <View {...props}>
                {children}
            </View>
        )
  )
}