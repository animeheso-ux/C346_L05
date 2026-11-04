import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button} from 'react-native';
import {Picker , PickerItemProps} from "@react-native-picker/picker";
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from "react-native";
import {ToastAndroid} from "react-native";
import {Alert} from "react-native";

const ButtonComponent = () =>  {
    return (       <Button title={"LOG IN"} onPress={() => {Alert.alert("Welcome!")}}></Button>)

}

export default function App() {
    const [role,setRole]=useState('Admin')
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

  return (
    <View style={styles.container}>

        <Picker selectedValue={role} onValueChange={(value) => setRole(value)} style={{height : 200 , width : 200}}>
            <Picker.Item label='Admin' value='Admin'/>
            <Picker.Item label="Guest" value="Guest"/>
        </Picker>
        <Text>Username:</Text>
        <TextInput placeholder={"Username:"} style={styles.TextInputs} onChangeText={(value) => {setUsername(value)}} />
        <Text>Password : </Text>
        <TextInput placeholder={"Password:"} style={styles.TextInputs} onChangeText={(value) => {setPassword(password)}}/>
        <TouchableOpacity onPress={() => {ToastAndroid.show(`Welcome ${role} ${username}`,ToastAndroid.SHORT)}}>
            <Text>LOG IN</Text>
        </TouchableOpacity>

        <Button title={"Click me for fun"} onPress={() => {Alert.alert("wee")} }></Button>









    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
    TextInputs : {
      borderWidth : 1
    }
});
