import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import ProfileScreen from './ProfilePage';
import EmployeeList from './EmployeeList';
import Dashboard from './Dashboard';
import DailyUpdates from './DailyFeed';

const profileIcon = require('../Assets/profilepic.png');
const employeeListIcon = require('../Assets/listpic.png');
const dashboardIcon = require('../Assets/dashboardpic.png');
const dailyFeedIcon = require('../Assets/dailyfeedpic.png');

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconPath;

          if (route.name === 'Profile') {
            iconPath = profileIcon;
          } 
          else if (route.name === 'EmployeeList') {
            iconPath = employeeListIcon;
          } 

          else if (route.name === 'Dashboard') {
            iconPath = dashboardIcon;
          }
           else if (route.name === 'DailyFeed') {
            iconPath = dailyFeedIcon;
          }
          return (
            <Image
              source={iconPath}
              style={{
                width: focused ? 30 : 25,
                height: focused ? 30 : 25,
              }}
            />
          );
        },
        tabBarActiveTintColor: '#3B4C9A',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="EmployeeList" component={EmployeeList} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="DailyFeed" component={DailyUpdates} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
