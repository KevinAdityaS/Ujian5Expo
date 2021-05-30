import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LoginAction } from '../Redux/Action';
import { Card } from 'react-native-elements';

export class MainMenu extends Component {
  
    componentDidMount(){

        if(!this.props.dataRedux.isLogin){
            this.props.navigation.navigate('Home')
        }

    }

    handleSignOut(){

        this.props.LoginAction(false,"isLogin")
        this.props.navigation.navigate("Home")
        alert("Sign Out Sucessfully!")

    }

  render() {

    return (
        <Card>
        <Card.Title>WELCOME TO LOVEAPP</Card.Title>
        <Card.Divider/>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.props.navigation.navigate('CandidateList')}}>
            <Text style={styles.textStyle}>Candidate List</Text>
        </TouchableOpacity>
        <Card.Divider/>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.props.navigation.navigate('CandidateSelect')}}>
            <Text style={styles.textStyle}>Select Candidate</Text>
        </TouchableOpacity>
        <Card.Divider/>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {this.handleSignOut()}}>
            <Text style={styles.textStyle}>Sign Out</Text>
        </TouchableOpacity>
        <Card.Divider/>
      </Card>
    )
  }

}

const mapStateToProps = (state) => ({
  dataRedux : state.LoginReducer
})

const mapDispatchToProps = {
  LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)

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
    },

    titleStyle:{
        fontWeight : 'bold'
    }

})