import React from 'react';
import { StyleSheet, FlatList, } from 'react-native';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
       
      
      ]
    };
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <FlatList
        data = {categories}
        renderItem = {({item}) =>
          <HomeItem 
            category={item} 
            onPress={() => navigation.navigate(item.pageName)}
          />}
        keyExtractor = {item => `${item.id}`}
        contentContainerStyle = {styles.container}
      />
    );
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