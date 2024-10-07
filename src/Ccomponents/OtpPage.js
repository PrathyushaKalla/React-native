import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import { phoneNumberRegex } from '../Utils';

const OtpScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleOTP = () => {
    if (otp) {
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
        onChangeText={text => {
          if (phoneNumberRegex.test(text)) {
            setOtp(text);
          }
        }}
        maxLength={6}
      />

      {error ? <Text style={globalStyles.error}>{error}</Text> : null}
      <TouchableOpacity style={globalStyles.buttonstyle} onPress={handleOTP}>
        <Text style={globalStyles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;
