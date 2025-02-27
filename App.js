import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
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

    if (contact.length != 11) {
      Alert.alert("Invalid Contact", "Contact number must be exactly 11 digits");
      return;
    }
    if (!email.includes("@") || !email.endsWith(".com")) {
      Alert.alert("Invalid Email");
      return;
    }

    console.log("Registered User:");
    console.log("Username:", username);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Contact:", contact);
    console.log("Email:", email);
    console.log("Password:", password);

    setSubmitted(true);
  };
  const handleContactChange = (text) => {
    let isNumeric = true;


    for (let i = 0; i < text.length; i++) {  // check if it's a number
      if (text[i] < "0" || text[i] > "9") {
        isNumeric = false;
        break; // stop checking if a non-numeric 
      }
    }

    //allow only numeric input and restrict to 11 digits
    if (isNumeric) {
      if (text.length <= 11) {
        setContact(text); // can only type  up to 11 digits
      }
    }

    //  alert if exceeds 11 digits
    if (text.length > 11) {
      Alert.alert("Invalid Contact", "Contact number must be exactly 11 digits.");
    }
  };




  return (
    <View style={Style.container}>
      <Text style={Style.title}>Create a new account</Text>
      <Text style={Style.subTitle}>It's quick and easy.</Text>

      {/* Username */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={Style.TextInput}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

        {/* First Name */}
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={[Style.TextInput, { flex: 1, marginRight: 6 }]}
        />

        {/* Last Name */}
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          style={[Style.TextInput, { flex: 1 }]}
        />

      </View>

      {/* Contact */}
      <TextInput
        placeholder="Contact Number"
        value={contact}
        onChangeText={handleContactChange}
        style={Style.TextInput}
      />

      {/* Email */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={Style.TextInput}
        keyboardType="email-address"

      />

      {/* Password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={Style.TextInput}
        secureTextEntry={true}

      />

      {/* Register */}
      <TouchableOpacity style={Style.button} onPress={handleRegister} >
        <Text style={Style.buttonText} >Register</Text>
      </TouchableOpacity>



      {/* Display Registered Data */}
      {submitted && (
        <View style={Style.resultContainer}>
          <Text style={Style.resultText}>✅ Registered Successfully!</Text>
          <Text>Username: {username}</Text>
          <Text>First Name: {firstName}</Text>
          <Text>Last Name: {lastName}</Text>
          <Text>Contact Number: {contact}</Text>
          <Text>Email: {email}</Text>
          <Text>Password: {password}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
