import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function SessionScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>RIAB PROJECT</Text>

      {/* BLOCCO ESERCIZIO 1 */}
      <View style={styles.exerciseBlock}>
        <View style={styles.imagesRow}>
          <Image source={require('../assets/es1_iniziale.png')} style={styles.phaseImage} />
          <Image source={require('../assets/es1_rotazione.png')} style={styles.phaseImage} />
          <Image source={require('../assets/es1_massima.png')} style={styles.phaseImage} />
          <Image source={require('../assets/es1_ritorno.png')} style={styles.phaseImage} />
        </View>

        <Text style={styles.seriesText}>Serie: 0/4   Ripetizioni: 10</Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Esempio</Text>
          </TouchableOpacity>

          {/* BOTTONE ISTRUZIONI */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Instructions', {
                exercise: {
                  name: 'Rotazione esterna con elastico',
                  image: require('../assets/es1_iniziale.png'),
                  instructions: [
                    'Telecamera a 45 gradi che inquadra tutto il corpo',
                    'Stare in piedi con schiena dritta',
                    'Gomito aderente al corpo a 90°',
                    'Afferrare l’elastico con tensione iniziale',
                    'Ruotare lentamente l’avambraccio verso l’esterno',
                    'Controllare il movimento',
                    'Tornare lentamente alla posizione iniziale'
                  ],
                  series: 3,
                  reps: 10,
                  rest: '2 minuti'
                }
              })
            }
          >
            <Text style={styles.buttonText}>Istruzioni</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RecordVideo')}
          >
            <Text style={styles.buttonText}>Svolgi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.disabledButton]}>
            <Text style={styles.buttonText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* BLOCCO ESERCIZIO 2 */}
      <View style={styles.exerciseBlock}>
        <View style={styles.imagesRow}>
          <Image source={require('../assets/es2_iniziale.png')} style={styles.phaseImage} />
          <Image source={require('../assets/es2_rotazione.png')} style={styles.phaseImage} />
          <Image source={require('../assets/es2_massima.png')} style={styles.phaseImage} />
          <Image source={require('../assets/es2_ritorno.png')} style={styles.phaseImage} />
        </View>

        <Text style={styles.seriesText}>Serie: 0/3   Ripetizioni: 10</Text>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Esempio</Text>
          </TouchableOpacity>

          {/* ISTRUZIONI ESERCIZIO 2 */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Instructions', {
                exercise: {
                  name: 'Abduzione con elastico',
                  image: require('../assets/es2_iniziale.png'),
                  instructions: [
                    'Posizionarsi in piedi con schiena dritta',
                    'Braccio lungo il fianco con gomito leggermente piegato',
                    'Afferrare l’elastico mantenendo tensione iniziale',
                    'Sollevare lentamente il braccio lateralmente',
                    'Raggiungere i 90° senza compensare con il tronco',
                    'Controllare la discesa',
                    'Ritornare alla posizione iniziale'
                  ],
                  series: 3,
                  reps: 10,
                  rest: '2 minuti'
                }
              })
            }
          >
            <Text style={styles.buttonText}>Istruzioni</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RecordVideo')}
          >
            <Text style={styles.buttonText}>Svolgi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.disabledButton]}>
            <Text style={styles.buttonText}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  exerciseBlock: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 12,
    marginBottom: 25
  },
  imagesRow: { flexDirection: 'row', justifyContent: 'space-between' },
  phaseImage: { width: 70, height: 70, borderRadius: 8, backgroundColor: '#ddd' },
  seriesText: { marginTop: 10, fontSize: 16, fontWeight: '600' },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  button: { backgroundColor: '#007AFF', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  disabledButton: { backgroundColor: '#9bb7d4' },
  buttonText: { color: 'white', fontWeight: 'bold' }
});
