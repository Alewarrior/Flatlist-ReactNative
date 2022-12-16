
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, {useState} from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/times';
import Futebol from './src/telas/FutRio/components/index';

export default function App() {

  const [fontecarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontecarregada){
    return <View />
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Futebol{...mock} Topo={mock.topo}/>
    </SafeAreaView>
  );
}


 
