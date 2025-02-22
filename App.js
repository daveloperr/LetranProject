import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Style } from "./src/styles/Mainstyle";


const App = () => {

  const [Username, setUsername] = useState('');
  const [firstName, setfirstName] = useState('');


  const handlePress = () => {
    console.log("Hello")
    setUsername("Letran")
    setfirstName("Dave")
  }
  return (

    <View style={Style.container}>

      <TextInput
        value={Username}
        style={Style.TextInput}
        onChangeText={(text) => setUsername(text)}


      />
      <TextInput
        value={firstName}
        style={Style.TextInput}
        onChangeText={(text) => setfirstName(text)}

      />

      <TouchableOpacity
        onPress={handlePress}>

        <Image style={Style.imageContainer}
          source={require('./src/assets/ningning.jpeg')} />

      </TouchableOpacity>

      <Text>
        Hedsa
      </Text>
    </View>


  );
}
export default App;