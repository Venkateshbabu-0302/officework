import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


export default class Login extends Component {
  render() {

    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>About Screen</Text>

        <Button title="Top tabs"

        onPress={()=>this.props.navigation.navigate('TopTab')}
        />
      </View>
    )
  }
}