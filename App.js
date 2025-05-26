import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const moods = [
  "Your mood: 10% coding, 90% watching YouTube.",
  "Today you’re ready... to give up.",
  "You look motivated, but your project folder hasn’t been opened since Monday.",
  "Coding? Your mood says: 'Maybe tomorrow.'",
  "System detects: you need a vacation from bugs.",
  "Your mood is saved in localStorage, but it’s expired.",
  "Coding on fire, but your internet is down. Cosmic irony.",
  "You pretend to be strong, but the error logs say otherwise.",
];

export default function App() {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);

  const checkMood = () => {
    setLoading(true);
    setMood('');
    setTimeout(() => {
      const random = Math.floor(Math.random() * moods.length);
      setMood(moods[random]);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developer Mood Detector</Text>

      <TouchableOpacity style={styles.button} onPress={checkMood}>
        <Text style={styles.buttonText}>Check My Coding Mood</Text>
      </TouchableOpacity>

      {loading && (
        <Text style={styles.loading}>Reading the aura from your last commit...</Text>
      )}

      {!loading && mood !== '' && (
        <Text style={styles.result}>{mood}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#facc15',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#facc15',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loading: {
    marginTop: 30,
    color: '#f9a8d4',
    fontStyle: 'italic',
    fontSize: 16,
  },
  result: {
    marginTop: 30,
    color: '#86efac',
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
