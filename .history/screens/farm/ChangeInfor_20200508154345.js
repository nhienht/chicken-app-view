import React from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';

export default function FarmItem(props) {

    return (
  <View>
       <TextInput
        label='Email'
        
      >

      </TextInput>
  </View>   
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBEEB9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 40
  },
  
});
