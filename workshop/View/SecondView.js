import React from 'react'

import {useNavigation } from '@react-navigation/native';

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
import { MyButton } from '../Component/MyButton';

import { styles } from './FirstView'

// export const SecondView = () => {
//     const navigation = useNavigation();
//     return (
//         <SafeAreaView style = { styles.container}>
//             <Text style = {styles.title}></Text>
//             <MyButton text = {"retour au menu"} action = {() => {navigation.goBack()}} top = {"20%"}></MyButton>
//         </SafeAreaView>
//     );
// };

export const SecondView = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = { styles.container}>
            <Text style= {styles.title}> Base: </Text>
        <TextInput placeholder='Base...'   style = {styles.textInput}></TextInput>
        <MyButton text={"Voir les taux de change"} action={() => {navigation.navigate("SecondView")}} top={"10%"}></MyButton>
        <MyButton text={"Convertir une monnaie"} action={() => {navigation.goBack()}} top={"10%"}></MyButton>
        </SafeAreaView>
    );
};