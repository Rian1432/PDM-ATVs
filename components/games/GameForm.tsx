import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import CurrencyInput from 'react-native-currency-input';
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

import CustomInput from '../shared/CustomInput'
import CustomMultiselect from '../shared/CustomMultiselect'
import StyledButton from '../shared/StyledButton'
import Game from '@/types/Game'
import globalStyles, { THEME_COLORS } from '@/constants/GlobalStyles';

type GameFormProps = {
  onSubmit: (form:Game) => void
  isLoading?: boolean
  game?: Game
}

export default function GameForm({onSubmit, isLoading, game}: GameFormProps) {
  const [name, setName] = useState('')
  const [value, setValue] = useState<number|null>(null)
  const [category, setCategory] = useState<any[]>([])

  useEffect(() => {
    if(game) {
      setName(game.name)
      setValue(game.value)
      setCategory([...game.category])
    }
  }, [])

  const toggleSelection = (itemName:string) => {
    setCategory((prevSelectedItems:any) => {
      if (prevSelectedItems.includes(itemName)) {
        return prevSelectedItems.filter((name:string) => name !== itemName);
      } else {
        return [...prevSelectedItems, itemName];
      }
    });
  };

  return (
    <View style={style.form}>
      <Text style={globalStyles.title}>{game ? 'Editar Jogo' : 'Adicionar Jogo'}</Text>
 
      <CustomInput 
        placeholder="Nome"
        value={name} 
        onChangeText={setName} 
      />

      <CurrencyInput
        value={value}
        onChangeValue={setValue}
        prefix=""
        renderTextInput={textInputProps => <CustomInput placeholder="Valor" {...textInputProps} />}
        delimiter="."
        separator=","
        precision={2}
        minValue={0}
      />

      <CustomMultiselect 
        selectedItems={category}
        toggleSelection={toggleSelection} 
      />

      <View style={style.buttonContainer}>
        <StyledButton
          style={{backgroundColor: THEME_COLORS.PRIMARY_COLOR, borderWidth: 1, borderColor: THEME_COLORS.PRIMARY_COLOR, width: 250, padding: 10}}
          title={game ? 'Editar' : 'Criar'}
          onPress={() => onSubmit({name, value, category})} 
          disabled={isLoading} 
        />

        <StyledButton 
          style={{backgroundColor: THEME_COLORS.BASE_COLOR, borderWidth: 1, borderColor: THEME_COLORS.PRIMARY_COLOR, width: 250}}
          title="Voltar" 
          onPress={() => router.replace('/home')} 
          disabled={isLoading} 
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: 250,
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: 250,
    alignItems: 'center'
  }
})