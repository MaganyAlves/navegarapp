import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Lancados from "../pages/Lancados";
import Registrar from "../pages/Registrar";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Registrar" component={Registrar} />
            <Stack.Screen name="Lancados" component={Lancados} />  
        </Stack.Navigator>
    );
}