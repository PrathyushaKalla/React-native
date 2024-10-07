import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  // const handleLogin = () => {
  //   if (username === 'user') {
  //     // AsyncStorage.setItem('userName', username);
  //     setError('');
  //     navigation.replace('OTPScreen');
  //   } else {
  //     setError('Invalid credentials');
  //   }
  // };
  const handleLogin = async () => {
    if (username === 'user') {
      try {
        // Use AsyncStorage to save the username
        await AsyncStorage.setItem('userName', username);
        setError('');
        navigation.replace('OTPScreen');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
    <Text style={globalStyles.header}>Login</Text>
      <TextInput
        placeholder="Enter Email"
        style={globalStyles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {error ? <Text style={globalStyles.error}>{error}</Text> : null}
      {/* <Button  color={'#3B4C9A'} title="Send OTP" onPress={handleLogin}  /> */}
      <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  buttonstyle: {
  backgroundColor: '#3B4C9A',
  padding: 10,
  borderRadius: 10,
  alignItems: 'center',
},
buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
},
});

export default LoginScreen;
