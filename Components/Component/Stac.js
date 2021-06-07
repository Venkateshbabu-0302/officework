import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from './Home';
import Login from './Login';
import TopTab from './TopTab';



const Stack= createStackNavigator();

export default class Stac extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="TopTab" component={TopTab}/>

        </Stack.Navigator>

      </NavigationContainer>
      
     
    );
  }
}

