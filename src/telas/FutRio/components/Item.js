import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

export default function Item({ item: {nome, imagem} }){
    const renderItem = ({item:{nome, imagem}})=><View key= {nome} style={estilos.item}>
        <Image source={image} style={estilos.imagem}/>
        <Text style={estilos.nome}>{ nome }</Text>

    </View>

}

const estilos= StyleSheet.create({
    titulo: {
    color:"#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom:8,
    fontSize: 20,
    lineHeight: 32,

},
item:{
    flexDirection:"row",
    borderBottomWidth: 1,
    borderBottomColor:'#ECECEC',

    paddingVertical: 16,

    alignItems:"center",
},
imagem:{
    width:46,
    height:46,
},
nome:{
    fontSize:16,
    lineHeight:26,
    marginLeft:11,
    color:"#464646",
}

})
