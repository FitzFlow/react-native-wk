import React, { useEffect, useState } from 'react';
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

import { useNavigation } from '@react-navigation/native';

// export const FirstView = () => {
//   const navigation = useNavigation();
//   return(
//     <SafeAreaView style = { styles.container}>
//       <Text style= {styles.title}> Écran 1 </Text>
//       <TextInput placeholder='Entrer du texte'   style = {styles.textInput}></TextInput>
//       <MyButton text={"Alert"} action={() => {navigation.navigate("SecondView")}} top={"10%"}></MyButton>
//     </SafeAreaView>
//   )
// };

export const FirstView = () => {
    const navigation = useNavigation();
    const [isBase, setBase] = useState('USD');
    const [isTo, setTo] = useState('EUR');
    const [isAmount, setAmount] = useState('0');
    const getTaux = async () => {
        try {
          var base = setBase();
          var to = setTo();
          var amount = setAmount();
          const response = await fetch(`https://anyapi.io/api/v1/exchange/convert?apiKey=oejoljr330gqn3sgslfs4g3vp644p4at8b654e9rv22o0hgal11hb4o&base=${isBase}&to=${isTo}&amount=${isAmount}`);
          const json = await response.json();
        } catch (error) {
          console.error(error);
        } finally {
            console.log("toto");
        }
      };
      useEffect(() => {
        getTaux();
      }, []);
    return(
      <SafeAreaView style = { styles.container}>
        <Text style= {styles.title}> Base: </Text>
        <TextInput placeholder='Base...'   style = {styles.textInput} onChangeText={(val) => {setBase(val)}}></TextInput>
        <Text style= {styles.title}> Amount: </Text>
        <TextInput placeholder='Amount...'   style = {styles.textInput} onChangeText={(val) => {setTo(val)}}></TextInput>
        <Text style= {styles.title}> To: </Text>
        <TextInput placeholder='To...'   style = {styles.textInput} onChangeText={(val) => {setAmount(val)}}></TextInput>
        <MyButton text={"Convertir"} action={() => {getTaux()}} top={"10%"}></MyButton>
        <MyButton text={"Voir les taux"} action={() => {navigation.navigate("SecondView")}} top={"10%"}></MyButton>
        <Text>Val : </Text>
      </SafeAreaView>
    )
  };

export const styles = StyleSheet.create({
  container:{
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center'
  },
  title: {
    fontSize:30,
    fontWeight:"700",
    marginTop: 10,
  },

  textInput: {
    borderWidth: 2,
    padding: 10,
    width: "90%",
    backgroundColor: "lightgrey",
    marginTop: 10,
    borderRadius: 10
  },
});
