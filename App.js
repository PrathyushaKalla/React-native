import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Ccomponents/Login';
import HomeScreen from './src/Ccomponents/HomePage';
import OTPScreen from './src/Ccomponents/OtpPage';
import EmployeeList from './src/Ccomponents/EmployeeList';
import EmployeeDetails from './src/Ccomponents/EmployeeDetails';
import Dashboard from './src/Ccomponents/Dashboard';
import VerticalDetails from './src/Ccomponents/VerticalDetails';
import EmployeeCardDetails from './src/Ccomponents/EmployeeCardDetails';
import DailyUpdates from './src/Ccomponents/DailyFeed';
import AddPostEvent from './src/Ccomponents/PostEvent';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="EmployeeList" component={EmployeeList} />
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="VerticalDetails" component={VerticalDetails} />
        <Stack.Screen name="EmployeeCard" component={EmployeeCardDetails} />
        <Stack.Screen name="DailyFeed" component={DailyUpdates} />
        <Stack.Screen name="AddPostEvent" component={AddPostEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

