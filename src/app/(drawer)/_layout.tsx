import { Drawer } from "expo-router/drawer";
import { View, StyleSheet } from 'react-native';
import { DrawerToggleButton } from "@react-navigation/drawer"
export default function DrawerLayout() {
  return (
    <Drawer  screenOptions={{ headerShown: false }}>
       <View style={styles.header}>
              <DrawerToggleButton />
      </View>
      <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      <Drawer.Screen name="singup" options={{ title: "SingUp" }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  header: {
   flexDirection: "row",
  width: "100%",
  justifyContent: "flex-end"
  },
});