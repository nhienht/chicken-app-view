import React from 'react';
import { createAppContainer } from 'react-navigation'
import axios from 'axios'
import AppNavigator from './Appnavigator'
import {CartProvider} from './contexts/Cart'
import {FarmProvider} from './contexts/FarmContext'

const AppContainer = createAppContainer(AppNavigator)

axios.defaults.baseURL='https://15e673d0.ngrok.io'
console.disableYellowBox = true;
export default function Features(props) {
  console.ignoredYellowBox = ['Warning: Each'];
  return (
    <FarmProvider>
        <CartProvider>
      <AppContainer />
      </CartProvider>
    </FarmProvider>
    
  );
}
