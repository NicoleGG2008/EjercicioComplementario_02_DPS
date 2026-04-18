import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import ParticipantInput from './components/Participantlnput';
import ParticipantList from './components/ParticipantList';

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const addParticipant = (name) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    if (participants.includes(trimmedName)) {
      Alert.alert('Error', 'Este participante ya existe');
      return;
    }

    setParticipants(prev => [...prev, trimmedName]);
  };

  const selectWinner = () => {
    if (participants.length === 0) {
      Alert.alert('Error', 'No hay participantes para seleccionar');
      return;
    }
    const randomIndex = Math.floor(Math.random() * participants.length);
    const selectedWinner = participants[randomIndex];

    setWinner(selectedWinner);
    setShowWinnerModal(true);
  };

  const resetRifa = () => {
    setParticipants([]);
    setWinner(null);
    setShowWinnerModal(false);
  };

  return (
    <View style={styles.container}>
      <ParticipantInput onAddParticipant={addParticipant} />

      <ParticipantList
        participants={participants}
        winner={winner}
        onSelectWinner={selectWinner}
        onReset={resetRifa}
        showWinnerModal={showWinnerModal}
        setShowWinnerModal={setShowWinnerModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
});