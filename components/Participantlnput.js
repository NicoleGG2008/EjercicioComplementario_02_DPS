import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ParticipantInput({ onAddParticipant }) {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (name.trim()) {
      onAddParticipant(name);
      setName('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre del participante"
        placeholderTextColor="#765D67"
        value={name}
        onChangeText={setName}
        onSubmitEditing={handleAdd}
        autoCapitalize="words"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#FADCD5', 
    borderRadius: 16,
    padding: 20,
    shadowColor: '#4B2138',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#6D3C52',
  },
  input: {
    borderWidth: 2,
    borderColor: '#765D67', 
    borderRadius: 12,
    padding: 16,
    fontSize: 18,
    marginBottom: 16,
    backgroundColor: '#2D222F', 
    color: '#FADCD5',
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#6D3C52', 
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4B2138',
  },
  addButtonText: {
    color: '#FADCD5', 
    fontSize: 18,
    fontWeight: '700',
  },
});