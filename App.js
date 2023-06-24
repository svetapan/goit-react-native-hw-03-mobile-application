import 'react-native-gesture-handler';
import {StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './assets/Screens/RegistrationScreen';
import LoginScreen from './assets/Screens/LoginScreen';
import PostsScreen from './assets/Screens/PostsScreen';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  return (
      <View style={styles.page}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
      </View>
  );
}


const styles = StyleSheet.create({
 page: {
   flex: 1,
   position: 'relative'
 },
});
