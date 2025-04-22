import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './style';
import { router } from 'expo-router';

export default function SingUp() {

  function handleLogin(){
    
    router.navigate('/')

  }

  function handleRegister(){
    
    router.navigate('/(tabs)/jardins')

  }



  return (
    <KeyboardAvoidingView style={styles.fundo}>
        <Text style={styles.submitText}>Tela de Registro</Text>

    <View style={styles.container}>
       
    <TextInput placeholder="UserName" autoCorrect={false} onChange={()=>{}} style={styles.input}/>

        <TextInput placeholder="Email" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
          
        <TextInput placeholder="Senha" autoCorrect={false} onChange={()=>{}} style={styles.input}/>

        <TextInput placeholder="Confirmar Senha" autoCorrect={false} onChange={()=>{}} style={styles.input}/>
      
        <TouchableOpacity style={styles.btnSubmit} onPress={handleRegister}>
            <Text>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister} onPress={handleLogin}>
            <Text style={styles.registerText}>Login</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>     
  );
}