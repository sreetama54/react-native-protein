// app/home.tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Home Screen</Text>
      <Text style={styles.subheading}>🎉 You made it here from the Splash screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
  },
  subheading: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
});
