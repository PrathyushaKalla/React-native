import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/GlobalStyles';

function ProfileScreen({navigation}) {
  const [user, setUser] = useState({
    username: '',
    logDetails: [
      {
        day: 'Tuesday',
        loginTime: '9:00 AM',
        activeHours: '8 hours',
        logoutTime: '5:00 PM',
      },
    ],
  });

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => navigation.replace('Login')},
    ]);
  };

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const storedUserName = await AsyncStorage.getItem('userName');
        if (storedUserName !== null) {
          setUser(prevState => ({
            ...prevState,
            username: storedUserName,
          }));
        }
      } catch (error) {
        console.error('Error retrieving username:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={globalStyles.verticalName}>Username: {user?.username}</Text>
      <Text style={globalStyles.verticalName}>Logging Details:</Text>
      {user.logDetails.map((log, index) => (
        <View key={index}>
          <Text style={globalStyles.verticalName}>{log.day}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={globalStyles.verticalName}>Login Time: </Text>
            <Text style={{marginLeft: 10}}>{log?.loginTime}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={globalStyles.verticalName}>Active Hours: </Text>
            <Text style={{marginLeft: 10}}>{log?.activeHours}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={globalStyles.verticalName}>Logout Time:</Text>
            <Text style={{marginLeft: 10}}>{log.logoutTime}</Text>
          </View>

          <TouchableOpacity
            style={globalStyles.buttonstyle}
            onPress={handleLogout}>
            <Text style={globalStyles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default ProfileScreen;
