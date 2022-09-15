import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

import { useFonts } from 'expo-font';
import {
  Raleway_700Bold,
  Raleway_600SemiBold,
  Raleway_500Medium,
} from '@expo-google-fonts/raleway';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

const App = () => {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Raleway_600SemiBold,
    Raleway_500Medium,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Routes />;
};

export default App;
