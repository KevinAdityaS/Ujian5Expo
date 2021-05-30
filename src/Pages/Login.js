import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { LoginAction } from '../Redux/Action';
import { Card } from 'react-native-elements';

class Login extends Component {
  
    constructor(props){

        super(props)
        this.state = {
            username : "",
            phone : ""
        }

    }

    handlerLogin(){

        axios.get('http://192.168.0.106:4646/user/login/', {
            params : {
                username : this.state.username,
                phone : this.state.phone
            }
        })

        .then((response) => {
            let data = response.data
            if(data !== ""){
                this.props.LoginAction(true, "isLogin")
                this.props.LoginAction(data, "userData")
                alert("Login Successfully!")
                this.props.navigation.navigate('MainMenu')
            }else{
                alert("Failed to Login!")
                this.props.LoginAction(false, "isLogin")
            }
        })

        .catch((error) =>{
            console.log("There is an error with : " + error)
        })

    }

  render() {

    return (
      <View style = {styles.viewStyle}>
        <Card>
            <Card.Title>LOGIN</Card.Title>
            <Card.Divider/>
            <Text style = {styles.titleStyle}> Username </Text>
            <TextInput style = {styles.inputStyle} placeholder = " Insert your username..." onChangeText={(value) => {this.setState({username : value})}}/>
            <Text style = {styles.titleStyle}> Phone </Text>
            <TextInput style = {styles.inputStyle} placeholder = " Insert your phone number..." onChangeText={(value) => {this.setState({phone : value})}}/>
            <Card.Divider/>
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handlerLogin()}}><Text style={styles.textStyle}>Login</Text></TouchableOpacity>
        </Card>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  dataMapping : state.LoginReducer
})

const mapDispatchToProps = {
  LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({

    viewStyle:{
        margin:2,
    },

    buttonStyle:{
        borderWidth:2,
        borderColor:"blue",
        padding:10,
        margin:20
    },

    inputStyle:{
      height: 30,
      margin: 8,
      borderWidth: 1,
    },

    textStyle:{
        textAlign:'center',
        fontWeight:'bold'
    },

    titleStyle:{
      fontWeight : 'bold'
  }

})