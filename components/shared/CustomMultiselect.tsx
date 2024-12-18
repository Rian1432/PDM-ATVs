import { THEME_COLORS } from '@/constants/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const items = [
  { id: '1', name: 'RPG' },
  { id: '2', name: 'Multiplayer' },
  { id: '3', name: 'Ação' },
  { id: '4', name: 'Puzzle' },
  { id: '5', name: 'Simulador' },
  { id: '6', name: 'Terror' },
  { id: '7', name: 'Aventura' },
  { id: '8', name: 'Casual' },
  { id: '9', name: 'História' },
];

type MultiSelectProps = {
  selectedItems: string[];
  toggleSelection: (itemName: string) => void;
}

export default function MultiSelect ({selectedItems, toggleSelection}: MultiSelectProps) {
  const renderItem = ({ item }:any) => {
    const isSelected = selectedItems.includes(item.name);
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => toggleSelection(item.name)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
        {isSelected && <Ionicons name="close-circle" color={THEME_COLORS.PRIMARY_COLOR} size={20} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione as categorias:</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 150,
    width: 270,
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    color: 'lightgray',
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: THEME_COLORS.DARK_GRAY_COLOR,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 270,
    borderWidth: 1,
    borderColor: THEME_COLORS.DARK_GRAY_COLOR,
  },
  selectedItem: {
    borderColor: THEME_COLORS.PRIMARY_COLOR,
  },
  itemText: {
    fontSize: 14,
    color: THEME_COLORS.GRAY_COLOR,
  },
  checkmark: {
    fontSize: 18,
    color: '#007bff',
  },
});
