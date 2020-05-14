import React from 'react';
import { StyleSheet, View, TextInput,  } from 'react-native';

export default function FarmItem(props) {

    return (
  <View>
       <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              />
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
