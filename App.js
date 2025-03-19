import React, { useState } from "react";
import { 
  Text, View, TextInput, TouchableOpacity, Alert, Image, ScrollView 
} from "react-native";
import { Style } from "./src/styles/Mainstyle";

// LOPEZ, DAVE IT3B-SD | FIRST ACTIVITY: REGISTRATION

const App = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = () => {
    if (username.trim() === "" || firstName.trim() === "" || lastName.trim() === "" || 
        contact.trim() === "" || email.trim() === "" || password.trim() === "") {
      Alert.alert("Missing Information", "All fields must be filled out.");
      return;
    }

    if (contact.length !== 11) {
      Alert.alert("Invalid Contact", "Contact number must be exactly 11 digits.");
      return;
    }

    if (!email.includes("@") || !email.endsWith(".com")) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return;
    }

    console.log("Registered User:", { username, firstName, lastName, contact, email, password });

    setSubmitted(true);
  };

  const handleContactChange = (text) => {
    if (/^\d*$/.test(text) && text.length <= 11) {
      setContact(text);
    }
  };

  return (
    <View style={Style.container}>
    <ScrollView contentContainerStyle={Style.scrollContainer}>

    <View style={Style.imageContainer}>
          <Image source={require("./src/assets/pig.png")} style={Style.pigImage} />
        </View>

    
      <View style={Style.registerContainer}>
        

        <Text style={Style.title}>Create a new account</Text>
        <Text style={Style.subTitle}>It's quick and easy.</Text>

      
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={Style.TextInput}
        />

        <View style={Style.rowContainer}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={[Style.TextInput, Style.halfInput]}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={[Style.TextInput, Style.halfInput]}
          />
        </View>

     
        <TextInput
          placeholder="Contact Number"
          value={contact}
          onChangeText={setContact}
          style={Style.TextInput}
          keyboardType="numeric"
          maxLength={11}
        />

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={Style.TextInput}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={Style.TextInput}
          secureTextEntry
        />

        <TouchableOpacity style={Style.button} onPress={handleRegister}>
          <Text style={Style.buttonText}>Register</Text>
        </TouchableOpacity>

        {submitted && (
          <View style={Style.resultContainer}>
            <Text style={Style.resultText}>✅ Registered Successfully!</Text>
            <Text>Username: {username}</Text>
            <Text>First Name: {firstName}</Text>
            <Text>Last Name: {lastName}</Text>
            <Text>Contact Number: {contact}</Text>
            <Text>Email: {email}</Text>
          </View>
        )}
      </View>

    </ScrollView>
  </View>
  );
};

export default App;
