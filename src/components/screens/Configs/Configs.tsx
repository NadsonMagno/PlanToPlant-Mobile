import React from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './style';
import { router } from 'expo-router';


export default function Configs(){
    return (
        <View style={styles.fundo}>
    
    <Text style={styles.submitText}>Tela de COnfiguração</Text>
   
    </View>   
    );
}