import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstPage, SecondPage, ThirdPage } from "../pages";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen name="Get Data Dummy" component={FirstPage} />
            <Stack.Screen name="Open Camera" component={SecondPage} />
            <Stack.Screen name="Dropdown list" component={ThirdPage} />
        </Stack.Navigator>
    )
}

export default Router;