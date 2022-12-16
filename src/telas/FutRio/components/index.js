import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import Itens from "./Item";
import Topo from "././Topo";
import { Montserrat_800ExtraBold } from "@expo-google-fonts/montserrat";


export default function Futebol({topo, itens}){
    return<>
 <FlatList
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({nome})=> nome}/>
    ListHeaderComponent={()=>{
        return<>
         <Topo{...Topo}/>
    <View style={estilos.Item.lista}>
    <Text> {itens.titulo}</Text>
    </View> 
        </>
    }}
   
    </>
}
const estilos = StyleSheet.create({
    itens:{
        paddingVertical: 16,

    }
})