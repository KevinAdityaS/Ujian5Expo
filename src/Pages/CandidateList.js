import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

export class CandidateList extends Component {
  
  constructor(props) {

    super(props);
    this.state = {
        dataFlatList:{}
    }

  }

  componentDidMount() {
  
    this.getData()
  
  }

  getData(){

    axios.get('http://192.168.0.106:4646/user/')

    .then((response) => {
      let data = response.data
      console.log(data)
      this.setState({dataFlatList : data})
    })

    .catch((error) => {
      console.log("There is an error with : " + error)
    })

  }

  handlerInfo(){

  }

  render() {

    return (
      <View>
        <FlatList
          data = {this.state.dataFlatList}
          keyExtractor = {item => parseInt(item.id)}
          renderItem = {({item}) => (
            <TouchableOpacity style={{borderWidth:2, borderColor:"blue", flexDirection:"row", margin:5}} onPress={() => {this.handlerInfo()}}>
              <Image style={{width:100,height:75}} source={{uri:`http://192.168.0.106:4646/user/image/${item.image}`}}/>
              <View style={{flexDirection:"column",alignSelf:"center"}}>
                <Text>Username : {item.username}</Text>
                <Text>Name : {item.name}</Text>
                <Text>Age : {item.age}</Text>
              </View>
            </TouchableOpacity>
          )}/>
      </View>
    )
  }

}

const mapStateToProps = (state) => ({
  
  isLogin : state.LoginReducer.isLogin

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CandidateList)

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