import React from 'react';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components';

import { Archivo_600SemiBold, Archivo_400Regular, Archivo_500Medium } from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';
import theme from './src/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
