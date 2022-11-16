import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const color = "white";
const SearchField = () => {
  return (
    <View style={{borderWidth:1,borderRadius:10,borderColor:"white",backgroundColor:"#52555A",overflow:"hidden"}}>
      <View style={{alignItems:"center",justifyContent:"center"}}>
        <TextInput
          style={{ width: "100%", color: "white" ,fontSize:17,padding:10,paddingLeft:30 }}
          placeholder="find your coffee.."
          placeholderTextColor={color}
        />
        <Ionicons name="search" color="white" size={20} style={{position:"absolute",left:5}}/>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
