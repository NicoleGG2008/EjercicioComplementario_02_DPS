import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ParticipantList({
  participants,
  winner,
  onSelectWinner,
  onReset,
  showWinnerModal,
  setShowWinnerModal
}) {

  const renderParticipant = ({ item }) => (
    <View
      style={[
        styles.participantItem,
        item === winner && styles.winnerItem
      ]}
    >
      <Text
        style={[
          styles.participantText,
          item === winner && styles.winnerText
        ]}
      >
        {item}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={participants}
        renderItem={renderParticipant}
        keyExtractor={(item) => item}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No hay participantes aún</Text>
            <Text style={styles.emptySubText}>
              Agrega nombres para comenzar
            </Text>
          </View>
        }
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.selectButton]}
          onPress={onSelectWinner}
          disabled={participants.length === 0}
        >
          <Text style={styles.buttonText}>
            🎉 Seleccionar Ganador
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={onReset}
        >
          <Text style={styles.buttonText}>
            🔄 Reiniciar Rifa
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showWinnerModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowWinnerModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.winnerModal}>
            <Text style={styles.winnerTitle}>
              🎊 ¡GANADOR!
            </Text>

            <Text style={styles.winnerName}>
              {winner}
            </Text>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setShowWinnerModal(false)}
            >
              <Text style={styles.closeModalText}>
                Cerrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  participantItem: {
    backgroundColor: 'white',
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    elevation: 2,
  },

  winnerItem: {
    backgroundColor: '#FFF3CD',
    borderWidth: 3,
    borderColor: '#FFD700',
  },

  participantText: {
    fontSize: 18,
    color: '#333',
  },

  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DAA520',
  },

  emptyContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },

  emptyText: {
    fontSize: 18,
    color: '#666',
  },

  emptySubText: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
  },

  buttonContainer: {
    marginTop: 10,
  },

  button: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
  },

  selectButton: {
    backgroundColor: '#2196F3',
  },

  resetButton: {
    backgroundColor: '#f44336',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  winnerModal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    width: width * 0.85,
    elevation: 10,
  },

  winnerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },

  winnerName: {
    fontSize: 32,
    fontWeight: '900',
    color: '#DAA520',
    marginBottom: 30,
    textAlign: 'center',
  },

  closeModalButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },

  closeModalText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});