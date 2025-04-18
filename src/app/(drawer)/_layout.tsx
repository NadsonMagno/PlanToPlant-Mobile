import { Drawer} from "expo-router/drawer";
import React from "react";
import {  Gesture}   from "react-native-gesture-handler";

export default function DrawerLayout() {
    return (
        <Drawer
        screenOptions={{
            headerShown: false,
            drawerType: "front",
            drawerStyle: {
            backgroundColor: "#fff",
            width: 240,
            },
        }}
        />
    );
}