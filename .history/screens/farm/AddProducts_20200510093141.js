import React from 'react';
import { StyleSheet, FlatList, AsyncStorage, View } from 'react-native';
import { render } from 'react-dom';
import HomeItem from '../../components/HomeListItem'


export default class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
    <View>
        <Text>a</Text>
    </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BBEEB9",
    height: 700,
    paddingTop: 40,
    paddingLeft: 26,
    paddingRight: 26
  }
})