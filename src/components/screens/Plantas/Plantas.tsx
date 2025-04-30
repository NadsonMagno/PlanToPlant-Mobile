import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {styles}  from './style'
import { DrawerToggleButton } from "@react-navigation/drawer"
export default function Plantas() {
  return (
    <View style={styles.fundo}>
      <View style={styles.container}>
       <View style={styles.header}>
                    <DrawerToggleButton tintColor='white' />
            </View>
      <Text style={styles.submitText}>Plantas</Text>
      </View>
    </View>
  )
}

