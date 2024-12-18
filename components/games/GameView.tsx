import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { formatNumber } from 'react-native-currency-input';
import Feather from '@expo/vector-icons/Feather';
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'

import Card from '../containers/Card'
import Game from '@/types/Game'

type GameViewProps = {
  game: Game
  onDelete: () => void
}

const formattedValue = (value:number) => formatNumber(value, {
  separator: ',',
  prefix: 'R$ ',
  precision: 2,
  delimiter: '.',
});

export default function GameView({game, onDelete}: GameViewProps) {
  return (
    <Card>
        <View style={style.container}>
          <View>
              <TouchableOpacity
                style={style.gameTitleContainer}
                onPress={() => router.replace(`/home/${game.id}`)}
              >
                <Text style={style.gameTitle}>{game.name}</Text>
                <Feather name="edit" size={16} color="orange" />
              </TouchableOpacity>

              <Text>{formattedValue(game.value)}</Text>
          </View>


          <View style={style.deleteButtonContainer}>            
            <TouchableOpacity
              onPress={() => {
                if (game.id) {
                  Alert.alert("Deletar jogo", "Tem certeza que deseja remover este jogo?", [
                    {
                      text: "Sim",
                      onPress: async () => {
                        onDelete();
                      },
                    },
                    {
                      text: "Não",
                      style: "cancel",
                    },
                  ]);
                } else {
                  Alert.alert(
                    "delete error",
                    "cannot delete game because it does not have an id!"
                  );
                }
              }} 
            >
               <Ionicons name="close" size={24} color="red" />
            </TouchableOpacity> 
          </View>
        </View>
    </Card>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    maxWidth: 70
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'light',
    marginBottom: 5,
  },
  deleteButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderLeftWidth: 1,
    borderLeftColor: 'lightgray',
    padding: 5,
    paddingLeft: 10,
  },
  gameTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  }
})