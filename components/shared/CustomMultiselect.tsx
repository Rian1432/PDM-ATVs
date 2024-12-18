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

export default function MultiSelect () {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (itemId:string) => {
    setSelectedItems((prevSelectedItems:any) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id:any) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const renderItem = ({ item }:any) => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]}
        onPress={() => toggleSelection(item.id)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
        {isSelected && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MultiSelect</Text>
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
    width: 230,
    maxHeight: 200,
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
    color: 'lightgray',
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#cce5ff',
  },
  itemText: {
    fontSize: 14,
  },
  checkmark: {
    fontSize: 18,
    color: '#007bff',
  },
});
