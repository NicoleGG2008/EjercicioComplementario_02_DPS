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
    backgroundColor: '#FADCD5', 
    padding: 20,
    marginVertical: 6,
    borderRadius: 16,
    shadowColor: '#4B2138',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#765D67',
  },
  winnerItem: {
    backgroundColor: '#6D3C52', 
    borderColor: '#FADCD5',
    borderWidth: 3,
    shadowColor: '#FADCD5',
    shadowOpacity: 0.6,
    transform: [{ scale: 1.05 }],
  },
  participantText: {
    fontSize: 18,
    color: '#2D222F', 
    fontWeight: '600',
  },
  winnerText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FADCD5', 
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 20,
    color: '#765D67', 
    fontWeight: '600',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 16,
    color: '#6D3C52', 
  },
  buttonContainer: {
    paddingVertical: 20,
  },
  button: {
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#4B2138',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  selectButton: {
    backgroundColor: '#6D3C52', // Vino rosado
    borderWidth: 2,
    borderColor: '#FADCD5',
  },
  resetButton: {
    backgroundColor: '#4B2138', // Borgoña oscuro
  },
  buttonText: {
    color: '#FADCD5', // Rosa beige claro
    fontSize: 18,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(27, 12, 26, 0.85)', // Ciruela casi negro
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerModal: {
    backgroundColor: '#2D222F', // Morado gris profundo
    borderRadius: 24,
    padding: 50,
    alignItems: 'center',
    width: width * 0.88,
    shadowColor: '#FADCD5',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.7,
    shadowRadius: 24,
    elevation: 20,
    borderWidth: 2,
    borderColor: '#6D3C52',
  },
  winnerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FADCD5', // Rosa beige claro
    marginBottom: 24,
    textAlign: 'center',
  },
  winnerName: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FADCD5',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: 'rgba(109, 60, 82, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  closeModalButton: {
    backgroundColor: '#765D67', // Malva grisáceo
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FADCD5',
  },
  closeModalText: {
    color: '#FADCD5',
    fontSize: 20,
    fontWeight: '700',
  },
});