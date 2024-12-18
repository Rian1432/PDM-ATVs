import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import CurrencyInput from 'react-native-currency-input';
import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'

import CustomInput from '../shared/CustomInput'
import CustomMultiselect from '../shared/CustomMultiselect'
import StyledButton from '../shared/StyledButton'
import Game from '@/types/Game'

type GameFormProps = {
  onSubmit: (form:Game) => void
  isLoading?: boolean
  game?: Game
}

export default function GameForm({onSubmit, isLoading, game}: GameFormProps) {
  const [name, setName] = useState('')
  const [value, setValue] = useState<number|null>(null)
  const [category, setCategory] = useState<any[]>([])

  const items = [
    {
      name: "Apple",
      id: 10,
    },{
      name: "Strawberry",
      id: 17,
    },{
      name: "Pineapple",
      id: 13,
    },{
      name: "Banana",
      id: 14,
    },{
      name: "Watermelon",
      id: 15,
    },{
      name: "Kiwi fruit",
      id: 16,
    }
  ]


  const onSelectedItemsChange = (selectedItems:any) => {
    Alert.alert('Selected Items', selectedItems)
    setCategory([ ...selectedItems ]);
  }

  useEffect(() => {
    if(game) {
      setName(game.name)
      setValue(game.value)
    }
  }, [])

  return (
    <View style={style.form}>
      <Text style={style.title}>{game ? 'Editar Jogo' : 'Adicionar Jogo'}</Text>
 
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

      {/* <CustomMultiselect /> */}

      {/* <View style={{ height: 100, width: '100%' }}>
        <SectionedMultiSelect
          items={items} 
          uniqueKey='id'
          selectText='Choose some things...'
          showDropDowns={true}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={category}
        />
      </View> */}

      <View style={style.buttonContainer}>
        <StyledButton 
          title="Voltar" 
          onPress={() => router.replace('/home')} 
          disabled={isLoading} 
        />

        <StyledButton 
          title={game ? 'Editar' : 'Criar'}
          onPress={() => onSubmit({name, value, category: ['teste']})} 
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
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    width: 100,
    marginTop: 20
  }
})