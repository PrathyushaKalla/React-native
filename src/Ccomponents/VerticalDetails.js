import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import globalStyles from '../styles/GlobalStyles';

const VerticalDetails = ({ route, navigation }) => {
  const { vertical } = route.params;
  const [selectedTab, setSelectedTab] = useState('Projects');

  const renderProjects = () => (
    <View>
      <Text style={globalStyles.verticalName}>Project Name: UnifyCare</Text>
      <Text style={globalStyles.verticalName}>Project Lead: Bhuvan</Text>
      <Text style={globalStyles.verticalName}>Members: 10</Text>
    </View>
  );

  const renderEmployees = () => (
    <View>
      <TouchableOpacity
        style={{ padding: 10, marginVertical: 5, backgroundColor: '#e0e0e0',borderRadius:10 }}
        onPress={() =>
          navigation.navigate('EmployeeCard', {
            employee: {
              name: 'Giri',
              experience: '5 Years',
              id: 'EMP001',
              email: 'giri@gmail.com',
              project: 'UnifyCare',
              skills:{
                primary:'React JS',
                secondary:'NodeJS',
              },
              reportingTeam:'UnifyCare',
            },
          })
        }
      >
        <Text style={globalStyles.verticalName}>Name: Giri</Text>
        <Text style={globalStyles.verticalName}>Experience: 5 Years</Text>
        <Text style={globalStyles.verticalName}>ID: EMP001</Text>
        <Text style={globalStyles.verticalName}>Email: giri@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: 10, marginVertical: 5, backgroundColor: '#e0e0e0' ,borderRadius:10}}
        onPress={() =>
          navigation.navigate('EmployeeCard', {
            employee: {
              name: 'Saketh',
              experience: '3 Years',
              id: 'EMP002',
              email: 'saketh@gmail.com',
              project: 'Progress Rail',
              skills:{
                primary:'Angular',
                secondary:'Java',
              },
              reportingTeam:'PG Rail Team',
            },
          })
        }
      >
        <Text style={globalStyles.verticalName}>Name: Saketh</Text>
        <Text style={globalStyles.verticalName}>Experience: 3 Years</Text>
        <Text style={globalStyles.verticalName}>ID: EMP002</Text>
        <Text style={globalStyles.verticalName}>Email: saketh@gmail.com</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ padding: 10, marginVertical: 5, backgroundColor: '#e0e0e0',borderRadius:10 }}
        onPress={() =>
          navigation.navigate('EmployeeCard', {
            employee: {
              name: 'Lalitha',
              experience: '7 Years',
              id: 'EMP003',
              email: 'lalitha@gmail.com',
              project: 'SSO',
              skills:{
                primary:'Angular',
                secondary:'NodeJS',
              },
              reportingTeam:'PG Rail Team',
            },
          })
        }
      >
        <Text style={globalStyles.verticalName}>Name: Lalitha</Text>
        <Text style={globalStyles.verticalName}>Experience: 7 Years</Text>
        <Text style={globalStyles.verticalName}>ID: EMP003</Text>
        <Text style={globalStyles.verticalName}>Email: lalitha@gmail.com</Text>
      </TouchableOpacity>
    </View>
  );

  const renderTechStack = () => (
    <View>
      <Text style={globalStyles.verticalName} >Tech Stack: React Native</Text>
      <Text style={globalStyles.verticalName}>Point of Contact: Bhumika</Text>
      <Text style={globalStyles.verticalName}>Members: 8</Text>
    </View>
  );

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity onPress={() => setSelectedTab('Projects')}>
          <Text style={{ fontWeight: selectedTab === 'Projects' ? 'bold' : 'normal' }}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Employees')}>
          <Text style={{ fontWeight: selectedTab === 'Employees' ? 'bold' : 'normal' }}>Employees</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('TechStack')}>
          <Text style={{ fontWeight: selectedTab === 'TechStack' ? 'bold' : 'normal' }}>Tech Stack</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 10 }}>
        {selectedTab === 'Projects' && renderProjects()}
        {selectedTab === 'Employees' && renderEmployees()}
        {selectedTab === 'TechStack' && renderTechStack()}
      </View>
    </View>
  );
};

export default VerticalDetails;
