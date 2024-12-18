import { Stack, router } from 'expo-router'
import { View, FlatList, Alert, StyleSheet, Text, StatusBar } from 'react-native'
import React from 'react'

import globalStyles, { THEME_COLORS } from '@/constants/GlobalStyles'
import useCollection from '@/firebase/hooks/useCollection'
import Game from '@/types/Game'
import GameView from '@/components/games/GameView'
import StyledButton from '@/components/shared/StyledButton'
import LoadableContainer from '@/components/containers/LoadableContainer'

export default function index() {
  const { data, count, remove, refreshData, loading } = useCollection<Game>("game-list");

  return (
    <View style={globalStyles.pageContainer}>
        <Stack.Screen options={{ title: "Home" }} />
        <StatusBar
          backgroundColor={THEME_COLORS.DARK_GRAY_COLOR}
          translucent={true}
          hidden={false}
        />

        <Text style={globalStyles.title}>Lista de jogos desejados</Text>

        <LoadableContainer isLoading={loading}>
          <View style={style.buttonContainer}>
            <StyledButton 
              title='Adicionar Jogo'
              style={{ width: 150}}
              onPress={ () => router.replace('/home/create')}
            />
          </View>

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
            style={{ width: "100%", marginTop: 20, maxHeight: 650 }}
          />
        </LoadableContainer>
    </View>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})