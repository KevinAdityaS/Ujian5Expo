import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Login extends Component {
  
    constructor(props){

        super(props)
        this.state = {
            username : "",
            phone : ""
        }

    }

    handleLogin(){

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
        <Text> Username </Text>
        <TextInput placeholder = "Insert your username..." onChangeText={(value) => {this.setState({username : value})}}/>
        <Text> Phone </Text>
        <TextInput placeholder = "Insert your phone number..." onChangeText={(value) => {this.setState({phone : value})}}/>
        
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleLogin()}}><Text style={styles.textStyle}>Login</Text></TouchableOpacity>
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
        margin:20,
    },

    buttonStyle:{
        borderWidth:10,
        borderColor:"red",
        margin:20
    },

    textStyle:{
        textAlign:'center',
    }

})