import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Text, View } from 'react-native';


export default function DateTime() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Text>{date.toUTCString()}</Text>
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
        
        
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};