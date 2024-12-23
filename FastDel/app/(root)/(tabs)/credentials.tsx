import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, ScrollView } from 'react-native'
import {Image} from 'expo-image';

import {Link} from 'expo-router'
import Images from '@/constants/images'
import {TextInput} from 'react-native-paper'


export default function profile() {
  function handleGoogle() {
    console.log('Google');
  }
  function handleApple() {
    console.log('Apple');
  }
  let [textInput, setTextInput] = React.useState("");
  return (


    <SafeAreaProvider style={styles.container}>
    <SafeAreaView style={styles.container}>
      
      
       
        <Images.SVGBanner style={styles.bannerImage}  />
        <View>
        <Text style={styles.textWelcome}>Welcome to FastDel</Text>
        <Text style={styles.textDescription}>Your trusted delivery Partner</Text>
       </View>
        <View style={[ styles.shadowProp]}>
          <TouchableOpacity onPress={handleGoogle} >
            <View style={styles.authViewStyle}>
            <Image source={Images.PlaceholderIcon} style={{width: 20, height: 20}}/>
            <Text>Continue with Google</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleGoogle} >
            <View  style={styles.authViewStyle}>
            <Image source={Images.PlaceholderIconApple} style={{width: 20, height: 20}}/>
            <Text>Continue with Apple</Text>
            </View>
            </TouchableOpacity>
         
        </View>

        <View style={styles.inlinetext}>
          <View style={{width: '35%',borderWidth: 1, borderColor: 'lightgray' }}></View>
          <Text>
          OR
          </Text>
          <View style={{width: '35%', borderWidth: 1,borderColor: 'lightgray'}}></View>
          </View>
         
        <Text>{textInput}</Text>

       <View style={{width: '100%',paddingLeft: 40,paddingRight: 40,display: 'flex',gap: 10}}>
        <TextInput 
        style={styles.input}
        onChangeText={(text) => setTextInput(text)}
        placeholder='Email Address'
        />
         <TextInput 
        style={styles.input}
        onChangeText={(text) => setTextInput(text)}
        placeholder='Password'
        />
         <TouchableOpacity onPress={handleGoogle} >
            <View style={{backgroundColor: '#2563EB',height: 40,display: 'flex',alignItems: 'center',justifyContent: 'center',borderRadius: 5}}>
            <Text style={{color: 'white',textAlign: 'center'}}>Sign In</Text>
            </View>
            </TouchableOpacity>
       </View>

       <View >
        <Text style={{textAlign: 'center',marginTop: 5}} >Don't have an account? Sign Up</Text>

        <Text style={{textAlign: 'center',marginTop: 10,color: 'gray'}}>By continuing you agree to our</Text>
        <Text style={{textAlign: 'center',color: 'gray'}}>Terms of Service and Privacy Policy</Text>
       </View>

      
   
    </SafeAreaView>
    </SafeAreaProvider>
  )
}



const styles = StyleSheet.create({
input:{
  padding: 5,
  backgroundColor: '#F8FAFC',
  borderWidth: 1,
  borderColor: 'lightgray',
  borderRadius: 5,
  height: 30,
  
},
  authViewStyle:
  {
    display: 'flex',
     gap: 5, 
     flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 5,
      marginTop: 15,
  },
  btns:
  {
        color: 'red',
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        width: '100%',
        display: 'flex',
       gap:5,
       
  },
  shadowProp: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    justifyContent: 'center',
    
  },
   bannerImage:
   {
      width: '100%',
      height: '30%',
      resizeMode: 'contain',
   },

  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: '20%',
   
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  textWelcome:
  {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDescription:
  {
    textAlign: 'center',
  }
  ,
  inlinetext:
  {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      marginTop: 15,
     
  }
});

