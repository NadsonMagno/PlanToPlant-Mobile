import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './style';
import { router } from 'expo-router';

export default function Login() {

  function handleSingUp(){

    router.replace('/(tabs)/plantas');


  }

  function handleRegister(){
    
    router.navigate('/singup')


  }


  return (
    <KeyboardAvoidingView style={styles.fundo}>
    
    <Text style={styles.submitText}>Tela de Login</Text>
    <View style={styles.container}>

       
    <TextInput placeholder="UserName" autoCorrect={false} onChange={()=>{}} style={styles.input}/>

        <TextInput placeholder="Email" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
          
        <TextInput placeholder="Senha" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
      
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSingUp}>
            <Text>Entrar</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.btnRegister} onPress={handleRegister}>
            <Text style={styles.registerText}>Criar conta</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>     
  );
}