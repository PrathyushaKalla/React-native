import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';


function EmployeeDetails({ route }) {
  const { employee } = route.params;
  const [selectedTab, setSelectedTab] = useState('Projects');

  const renderContent = () => {
    switch (selectedTab) {
      case 'TechStack':
        return (
          <View>
            <Text>Primary Skills: React, JavaScript</Text>
            <Text>Secondary Skills: Node.js, Python</Text>
          </View>
        );
      case 'OrgStructure':
        return (
          <View>
            <Text>L1: Senior Manager</Text>
            <Text>L2: Director</Text>
            <Text>Jr: None</Text>
          </View>
        );
      default:
        return (
          <View>
            <Text>Project 1: Employee Management System</Text>
            <Text>Project 2: Company Website</Text>
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Employee: {employee.name}</Text>
      <Text>Designation: {employee.designation}</Text>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Projects" onPress={() => setSelectedTab('Projects')} color={selectedTab === 'Projects' ? '#3B4C9A' : 'gray'} />
        <Button title="Tech Stack Details" onPress={() => setSelectedTab('TechStack')} color={selectedTab === 'TechStack' ? '#3B4C9A' : 'gray'} />
        <Button title="Org Structure" onPress={() => setSelectedTab('OrgStructure')} color={selectedTab === 'OrgStructure' ? '#3B4C9A' : 'gray'} />
      </View>

      <View style={{ marginTop: 20 }}>
        {renderContent()}
      </View>
    </View>
  );
}

export default EmployeeDetails;
