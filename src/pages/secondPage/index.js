import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { styleGlobal } from "../../helper/globalStyle";

const SecondPage = ({ navigation }) => {
    const [dataImage, setDataImage] = useState('');

    const TakePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality: 0.8,
            maxHeight: 800,
            maxWidth: 800,
            includeBase64: true
        }

        launchCamera(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.warn('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.warn('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: 'data:image/jpeg;base64,' + response.base64 };
                setDataImage(source)
            }
        });
    }

    const goTo = () => {
        console.log('hit');
        navigation.navigate('Dropdown list')

    }
    return (
        <View>
            <Text style={styleGlobal.viewBtn}>Take Photo</Text>
            <View style={styleGlobal.viewBtn}>
                <TouchableOpacity style={styleGlobal.viewSubBtn} onPress={() => { TakePhoto() }}>
                    <Text style={styleGlobal.txtBtn}>Open Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styleGlobal.viewSubBtn_} onPress={() => goTo()}>
                    <Text style={styleGlobal.txtBtn_}>ke halaman ThirdPage</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SecondPage;