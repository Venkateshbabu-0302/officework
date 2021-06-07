import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

export const Pickersselect = () => {
    
    return (
        <View style={styles.container}>
            <Picker
               
                style={{ height:50,width:100,marginBottom:10}}
                >
                <Picker.Item label="All" value="all" />
                <Picker.Item label="Approved" value="Approved" />
                <Picker.Item label="Success" value="Success" />
                <Picker.Item label="Suspended" value="Suspended" />
                <Picker.Item label="Rejected" value="Rejected" />
                
            </Picker>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: 'rgba(0,0,31,1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });