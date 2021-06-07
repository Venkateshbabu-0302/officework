import React from 'react';
import {StyleSheet, View} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


const ModalPicker = () => {
    return (
          <View style={styles.container}>
            <ModalDropdown 
    
                options = {['Please Select','HTML', 'CSS','JavaScript','React Native']}
    
            />
          </View>
      )
  };

const styles = StyleSheet.create ({
      container : {
        paddingTop : 50,
        justifyContent : "center",
        alignItems : "center"
      }
  });

export default ModalPicker;
