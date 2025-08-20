// app/index.tsx

import { router } from 'expo-router';
import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home'); // Navigate to app/home.tsx
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete protein</Text>
      <Text style={styles.subtitle}>team mars+sree</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
  container: {
    width,
    height,
    backgroundColor: '#9ae99dff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#ffffffff',
    fontFamily: 'LeckerliOne-Regular',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 20,
    color: '#D4D4D4',
    fontWeight: 'bold',
  },
});
