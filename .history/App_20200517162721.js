import React from 'react';
import { createAppContainer } from 'react-navigation'
import axios from 'axios'
import AppNavigator from './Appnavigator'
import { CartProvider } from './contexts/Cart'
import { FarmProvider } from './contexts/FarmContext'
import { StoreProvider } from './contexts/StoreContext'

const AppContainer = createAppContainer(AppNavigator)

axios.defaults.baseURL = 'https://f9771226.ngrok.io'
console.disableYellowBox = true;
export default function Features(props) {
  console.ignoredYellowBox = ['Warning: Each'];
  return (
    <StoreProvider>
      <FarmProvider>
        <CartProvider>
          <AppContainer />
        </CartProvider>
      </FarmProvider>
    </StoreProvider>
  );
}
