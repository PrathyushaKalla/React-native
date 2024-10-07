import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../styles/GlobalStyles';
import { verticals } from '../Utils';

const Dashboard = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('VerticalDetails', { vertical: item })}>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Image source={require('../Assets/Vector.png')} style={{ width: 30, height: 30 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={globalStyles.verticalName}>{item.name}</Text>
          <Text>{item.employeeCount} Employees</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={verticals}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};

export default Dashboard;
