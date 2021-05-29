import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Router from './src/Router/Router';
import Store from './src/Redux/Store';

class App extends Component {
  
  render() {
    return (
      <Provider store = {Store}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </Provider>
    );
  }

}
export default App