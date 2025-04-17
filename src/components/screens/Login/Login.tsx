import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './style';
import { router } from 'expo-router';

export default function Login() {

  function handleSingUp(){

    router.navigate('/singup')
    

  }



  return (
    <KeyboardAvoidingView style={styles.fundo}>
    
    <View style={styles.container}>
       
    <TextInput placeholder="UserName" autoCorrect={false} onChange={()=>{}} style={styles.input}/>

        <TextInput placeholder="Email" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
          
        <TextInput placeholder="Senha" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
      
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSingUp}>
            <Text>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.registerText}>Login</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>     
  );
}