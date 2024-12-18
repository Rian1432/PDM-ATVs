import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { THEME_COLORS } from '@/constants/GlobalStyles'

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
    backgroundColor: THEME_COLORS.DARK_GRAY_COLOR,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.26,
    borderRadius: 8,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  }
})