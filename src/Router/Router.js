import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainMenu from '../Pages/MainMenu';
import CandidateSelect from '../Pages/CandidateSelect';
import CandidateList from '../Pages/CandidateList';
import CandidateInfo from '../Pages/CandidateInfo';

const Stack = createStackNavigator();
class Router extends Component {

  render() {
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Home" component = {Home}/>
            <Stack.Screen name = "Login" component = {Login}/>
            <Stack.Screen name = "Register" component = {Register}/>
            <Stack.Screen name = "MainMenu" component = {MainMenu}/>
            <Stack.Screen name = "CandidateSelect" component = {CandidateSelect}/>
            <Stack.Screen name = "CandidateList" component = {CandidateList}/>
            <Stack.Screen name = "CandidateInfo" component = {CandidateInfo}/>
        </Stack.Navigator>
    );
  }

}
export default Router