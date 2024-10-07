import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/GlobalStyles';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOTP = () => {
    if (otp === '1234') {
      setError('');
      navigation.replace('Home');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.header}>OTP Verification</Text>
      <TextInput
        placeholder="Enter OTP"
        style={globalStyles.input}
        value={otp}
        onChangeText={(text) => setOtp(text)}
      />
      {error ? <Text style={globalStyles.error}>{error}</Text> : null}
      {/* <Button title="Verify OTP" onPress={handleOTP} /> */}
      <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleOTP}>
        <Text style={globalStyles.buttonText}>Verify OTP</Text>
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
});

export default OtpScreen;
