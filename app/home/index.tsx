import { Stack, router } from 'expo-router'
import { View, Text, FlatList, Button, Alert, StyleSheet } from 'react-native'
import React from 'react'

import Loading from '@/components/shared/Loading'
import HeaderRight from '@/components/headers/HeaderRight'
import globalStyles, { THEME_COLORS } from '@/constants/GlobalStyles'
import useCollection from '@/firebase/hooks/useCollection'
import Game from '@/types/Game'
import GameView from '@/components/games/GameView'
import StyledButton from '@/components/shared/StyledButton'

export default function index() {
  const { data, count, remove, refreshData, loading } = useCollection<Game>("game-list");

  // if (loading) return <Loading />

  return (
    <View style={globalStyles.pageContainer}>
        <Stack.Screen
          options={{
            title: "Home",
            headerRight: () => <HeaderRight />,
          }}
        />

        {/* <Text style={globalStyles.title}>Lista de desejos {count}</Text> */}

        <View style={style.buttonContainer}>
          <StyledButton 
            title='Adicionar Jogo'
            style={{ width: 150}}
            onPress={ () => router.replace('/home/create')}
          />
        </View>

        {loading 
          ? ( <Loading /> ) 
          : (
            <FlatList
            data={data}
            renderItem={({ item }) => (
              <GameView 
                game={item} 
                onDelete={
                  async () => {
                    try {
                      await remove(item.id!)
                      refreshData()
                    } catch (error: any) {
                      Alert.alert("Error", error.toString())
                    }
                  }
                }
              />
            )}
            style={{ width: "100%", marginTop: 20 }}
          />
        )}

    </View>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})