import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styleGlobal } from "../../helper/globalStyle";

const FirstPage = ({ navigation }) => {

    const [dataObj, setDataObj] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const url = 'https://dummyapi.io/data/v1/user?limit=10';
        const app_id = 'app-id' + '62661cb1dd4b8d38bc39f2e4'
        await fetch(url, {
            method: 'GET',
            headers: {
                'app-id': '62661cb1dd4b8d38bc39f2e4',
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setDataObj(data.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        // try {
        //     let response = await fetch(url);
        //     let json = await response.json();
        //     let setData = Object.values(json);
        //     // let dataSplice = setData.slice(0, 10);
        //     console.log(json)
        //     setDataObj(setData);
        // } catch (error) {
        //     console.log(error)
        // }
    }

    const goTo = () => {
        console.log('hit');
        navigation.navigate('Open Camera')

    }

    return (
        <View>
            <TouchableOpacity onPress={() => goTo()}>
                <Text>ke halaman second page</Text>
            </TouchableOpacity>
            <FlatList
                data={dataObj}
                keyExtractor={(key, index) => key + index.toString()}
                renderItem={({ item, index }) =>
                    <View style={styleGlobal.viewContListTrans}>
                        <View style={styleGlobal.viewListTransDet} >
                            <View style={styleGlobal.viewSubListTransDet}>
                                <View style={styleGlobal.viewListTrans}>
                                    <View style={styleGlobal.viewSubListTrans}>
                                        <View style={styleGlobal.viewListTransSender}>
                                            <Text style={styleGlobal.txtListTransSender}>{item.firstName}</Text>
                                        </View>
                                        <Text style={styleGlobal.txtListTransName}>{item.lastName}</Text>
                                        <View style={styleGlobal.viewListAmoDate}>
                                            <Text style={styleGlobal.txtListAmoDate}>{item.title}</Text>
                                        </View>
                                        <View style={styleGlobal.viewListAmoDate}>
                                            <Text style={styleGlobal.txtListAmoDate}>{item.id}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            />
            {/* <Text>ini halaman first page</Text>
            <TouchableOpacity onPress={() => goTo()}>
                <Text>ke halaman second page</Text>
            </TouchableOpacity> */}
        </View >
    )
}

export default FirstPage;