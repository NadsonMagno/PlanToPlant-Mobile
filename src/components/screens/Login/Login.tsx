import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './style';
import { router } from 'expo-router';

export default function Login() {

  function handleSingUp(){

    router.navigate('/singup')
    

  }

  function handleRegister(){
    
    router.navigate('/(drawer)/configs')

  }


  return (
    <KeyboardAvoidingView style={styles.fundo}>
    
    <Text style={styles.submitText}>Tela de Login</Text>
    <View style={styles.container}>

       
    <TextInput placeholder="UserName" autoCorrect={false} onChange={()=>{}} style={styles.input}/>

        <TextInput placeholder="Email" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
          
        <TextInput placeholder="Senha" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
      
        <TouchableOpacity style={styles.btnSubmit} onPress={handleSingUp}>
            <Text>Criar conta</Text>
        </TouchableOpacity>

{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:2168283523. */}
        <TouchableOpacity style={styles.btnRegister} onPress={handleRegister}>
            <Text style={styles.registerText}>Login</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>     
  );
}