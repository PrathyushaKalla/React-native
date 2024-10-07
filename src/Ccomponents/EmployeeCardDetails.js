import React from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../styles/GlobalStyles';

const EmployeeDetails = ({ route }) => {
  const { employee } = route.params;

  return (
    <View style={globalStyles.cardPadding}>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Name:</Text>
        <Text style={{marginLeft: 10}}>{employee.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Experience:</Text>
        <Text style={{marginLeft: 10}}>{employee.experience}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Employee ID:</Text>
        <Text style={{marginLeft: 10}}>{employee.id}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Project/Bench: </Text>
        <Text style={{marginLeft: 10}}>{employee.project}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Primary Skills:</Text>
        <Text style={{marginLeft: 10}}>{employee.skills.primary}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Secondary Skills:</Text>
        <Text style={{marginLeft: 10}}>{employee.skills.secondary}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={globalStyles.verticalName}>Reporting Team: </Text>
        <Text style={{marginLeft: 10}}>{employee.reportingTeam}</Text>
      </View>
      {/* */}
    </View>
  );
};

export default EmployeeDetails;
