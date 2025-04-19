import { Drawer} from "expo-router/drawer";
import React from "react";
import {  GestureHandlerRootView}   from "react-native-gesture-handler";

export default function DrawerLayout() {
    return (
        <GestureHandlerRootView>
        <Drawer>
        <Drawer.Screen name="(tabs)" />
        </Drawer>
        </GestureHandlerRootView>
    );
}