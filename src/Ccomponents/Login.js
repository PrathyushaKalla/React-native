import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/GlobalStyles';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (username === 'prathyusha') {
      try {
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
    <View style={globalStyles.container}>
    <Text style={globalStyles.header}>Login</Text>
      <TextInput
        placeholder="Enter Email"
        style={globalStyles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      {error ? <Text style={globalStyles.error}>{error}</Text> : null}
      <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
