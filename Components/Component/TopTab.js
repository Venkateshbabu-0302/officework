import React, { Component } from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
 

const Tab = createMaterialTopTabNavigator();

export default class TopTab extends Component {
    render() { 
    return (
         

            <Tab.Navigator >

                <Tab.Screen name="Tab1" component={Tab1}/>
                <Tab.Screen name="tab2" component={Tab2} />

            </Tab.Navigator>
           

            
        );
    }
}
 
