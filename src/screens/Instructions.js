import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function InstructionsScreen({ route, navigation }) {
  const { exercise } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Istruzioni</Text>

      {/* Immagine grande */}
      <Image source={exercise.image} style={styles.image} />

      {/* Nome esercizio */}
      <Text style={styles.exerciseName}>{exercise.name}</Text>

      {/* Istruzioni */}
      <View style={styles.instructionsBox}>
        {exercise.instructions.map((line, index) => (
          <Text key={index} style={styles.instructionLine}>• {line}</Text>
        ))}
      </View>

      {/* Serie / Ripetizioni / Pausa */}
      <Text style={styles.details}>
        📹 {exercise.series} serie   |   ✔️ {exercise.reps} ripetizioni   |   ⏱️ pausa {exercise.rest}
      </Text>

      {/* Pulsante indietro */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Torna indietro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  image: { width: '100%', height: 250, borderRadius: 12, marginBottom: 20 },
  exerciseName: { fontSize: 20, fontWeight: 'bold', marginBottom: 15 },
  instructionsBox: { marginBottom: 20 },
  instructionLine: { fontSize: 16, marginBottom: 6 },
  details: { fontSize: 16, fontWeight: '600', marginBottom: 30 },
  backButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10 },
  backText: { color: 'white', textAlign: 'center', fontSize: 18 }
});
