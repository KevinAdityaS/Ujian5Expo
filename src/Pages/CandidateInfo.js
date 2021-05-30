import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export class CandidateInfo extends Component {
  
  constructor(props){

    super(props)

  } 

  render() {
    return (
      <View>
        <Text></Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
  isLogin : state.LoginReducer.isLogin

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateInfo)

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