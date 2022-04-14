import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styleGlobal } from "../../helper/globalStyle";

const FirstPage = ({ navigation }) => {

    const [dataObj, setDataObj] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const url = 'http://hp-api.herokuapp.com/api/characters';
        // setIsLoading(true);
        try {
            let response = await fetch(url);
            let json = await response.json();
            let setData = Object.values(json);
            let dataSplice = setData.slice(0, 10);
            setDataObj(dataSplice);
            // setForm({
            //     temp: setData
            // });
            // setIsLoading(false)
        } catch (error) {
            // setIsLoading(false)
        }
    }

    const goTo = () => {
        console.log('hit');
        navigation.navigate('SecondPage')

    }

    return (
        <View>
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
                                            <Text style={styleGlobal.txtListTransSender}>{item.name}</Text>
                                        </View>
                                        <Text style={styleGlobal.txtListTransName}>{item.species}</Text>
                                        <View style={styleGlobal.viewListAmoDate}>
                                            <Text style={styleGlobal.txtListAmoDate}>{item.gender}</Text>
                                        </View>
                                        <View style={styleGlobal.viewListAmoDate}>
                                            <Text style={styleGlobal.txtListAmoDate}>{item.house}</Text>
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