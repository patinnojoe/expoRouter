// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark"? Colors.dark : Colors.light
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
  
      <React.Fragment>
          <Stack screenOptions={
              {
                  headerStyle: { backgroundColor: theme.headerBackground },
                  headerTintColor: theme.text,
                  headerShadowVisible:false
              }
          }>
              <Stack.Screen name="index" options={{ headerShown: true, title: 'Home',}} />
              <Stack.Screen name="contact" options={{ headerShown: true, title: 'Contact us' }} />
               <Stack.Screen name="menu" options={{ headerShown: true, title: 'menu' }} />
               
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </React.Fragment>

  );
}
