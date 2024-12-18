import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export default function Card({children}: CardProps) {
  return (
    <View style={styles.card}>
      { children }
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 15,
    }
})