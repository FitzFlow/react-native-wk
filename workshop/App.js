import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
import { MyButton } from './Component/MyButton';
import { FirstView } from './View/FirstView';
import { SecondView } from './View/SecondView';

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstView" component={FirstView} options={{headerShown: false}}/>
        <Stack.Screen name="SecondView" component={SecondView} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
    fontSize:30,
    fontWeight:"700"
  },

  textInput: {
    borderWidth: 2,
    padding: 10,
    width: "90%",
    backgroundColor: "lightblue",
    marginTop: 20,
    borderRadius: 10
  },
});

export default App;
