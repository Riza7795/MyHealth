import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

// Navigation stacks (to be implemented)
// import AuthStack from './src/navigation/AuthStack';
// import AppStack from './src/navigation/AppStack';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  // const { user } = useAuthStore(); // TODO: Implement auth store

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, images, etc.
        // await Font.loadAsync(Entypo.font);
        // Simulate async work
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoaded(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#4F46E5" />
      </View>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        {/* {user ? <AppStack /> : <AuthStack />} */}
        {/* TODO: Implement navigation stacks */}
        <View style={styles.container}>
          {/* Placeholder */}
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
