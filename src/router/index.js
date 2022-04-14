import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FirstPage, SecondPage, ThirdPage } from "../pages";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="SecondPage" component={SecondPage} />
            <Stack.Screen name="ThirdPage" component={ThirdPage} />
        </Stack.Navigator>
    )
}

export default Router;