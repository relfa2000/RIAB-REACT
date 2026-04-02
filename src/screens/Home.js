import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen({ navigation }) {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2026-03-05');

  // Mappa date → sessioni
  const sessionsByDate = {
    '2026-03-05': [
      { id: '1', name: 'Sessione spalla' },
      { id: '2', name: 'Stretching' },
    ],
    '2026-03-07': [
      { id: '3', name: 'Mobilità' },
    ],
  };

  const sessionsForSelectedDate = sessionsByDate[selectedDate] || [];

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>RIAB PROJECT</Text>

      {/* Dropdown Programma */}
      <Picker
        selectedValue={selectedProgram}
        onValueChange={(value) => setSelectedProgram(value)}
        style={styles.dropdown}
      >
        <Picker.Item label="Seleziona programma" value={null} />
        <Picker.Item label="Programma spalla" value="spalla" />
        <Picker.Item label="Programma ginocchio" value="ginocchio" />
      </Picker>

      {/* Calendario */}
      <Calendar
        current={'2026-03-05'}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#007AFF',
          },
          '2026-03-05': { marked: true, dotColor: '#007AFF' },
          '2026-03-07': { marked: true, dotColor: '#007AFF' },
        }}
        style={styles.calendar}
      />

      {/* Lista sessioni del giorno */}
      <View style={styles.listContainer}>
        {sessionsForSelectedDate.length === 0 ? (
          <Text style={styles.emptyText}>Nessuna sessione</Text>
        ) : (
          <FlatList
            data={sessionsForSelectedDate}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            )}
          />
        )}
      </View>

      {/* Bottone INIZIA */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Session')}
      >
        <Text style={styles.startText}>INIZIA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  calendar: {
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
  },
  startButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  startText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});


