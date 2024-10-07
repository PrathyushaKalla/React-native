import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/GlobalStyles';
import { employees } from '../Utils';

function EmployeeListScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetails', { employee: item})}>
      <View style={{ padding: 20 }}>
        <Text style={globalStyles.verticalName}>{item.name}</Text>
        <Text>{item.designation}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default EmployeeListScreen;
