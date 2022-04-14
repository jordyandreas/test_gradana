import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SecondPage = ({navigation}) => {
    const goTo = () => {
        console.log('hit');
        navigation.navigate('ThirdPage')

    }
    return (
        <View>
            <Text>ini halaman second page</Text>
            <TouchableOpacity onPress={() => goTo()}>
                <Text>ke halaman ThirdPage</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SecondPage;