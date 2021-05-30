import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';

class Home extends Component {

    handlerLogin(){

        if(this.props.isLogin){
            this.props.navigation.navigate('MainMenu')
        }else{
            this.props.navigation.navigate('Login')
        }

    }

  render() {

    return (
      <View>
        <Card>
          <Card.Title>WELCOME TO LOVEAPP</Card.Title>
          <Card.Divider/>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.handlerLogin()}}>
              <Text style={styles.textStyle}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.props.navigation.navigate('Register')}}>
              <Text style={styles.textStyle}>Register</Text>
          </TouchableOpacity>
          <Card.Divider/>
        </Card>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({

  isLogin : state.LoginReducer.isLogin

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

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
      height:30,
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