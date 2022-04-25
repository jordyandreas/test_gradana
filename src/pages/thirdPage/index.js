import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { styleGlobal } from "../../helper/globalStyle";

const ThirdPage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [tempData, setTempData] = useState([]);
    const [items, setItems] = useState([
        {
            label: 'Jakarta Utara', value: {
                "id": "1",
                "province": "Jakarta Utara",
                "district": "Cilincing",
                "sub_district": "Sukapura",
                "village": "Sukapura",
                "postal_code": "14140"
            },
        },
        {
            label: 'Jakarta Barat', value: {
                "id": "2",
                "province": "Jakarta Barat",
                "district": "Kebon Jeruk",
                "sub_district": "Duri Kepa",
                "village": "Duri Kepa",
                "postal_code": "11510"
            },
        },
        {
            label: 'Jakarta Pusat', value: {
                "id": "3",
                "province": "Jakarta Pusat",
                "district": "Menteng",
                "sub_district": "Menteng",
                "village": "Menteng",
                "postal_code": "10310"
            },
        },
        {
            label: 'Jakarta Selatan', value: {
                "id": "4",
                "province": "Jakarta Selatan",
                "district": "Cilandak",
                "sub_district": "Gandaria Selatan",
                "village": "Gandaria Selatan",
                "postal_code": "12420"
            },
        },
    ]);

    return (
        <View>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeValue={(value) => {
                    setTempData(value);
                }}
            />
            <View style={styleGlobal.centerView}>
                <Text style={styleGlobal.txtContainer}>Detail Information</Text>
                <View style={styleGlobal.subViewInfo}>
                    <Text>Province </Text>
                    <Text>:{tempData?.province}</Text>
                </View>
                <View style={styleGlobal.subViewInfo}>
                    <Text>District </Text>
                    <Text>:{tempData?.district}</Text>
                </View>
                <View style={styleGlobal.subViewInfo}>
                    <Text>Sub District </Text>
                    <Text>:{tempData?.sub_district}</Text>
                </View>
                <View style={styleGlobal.subViewInfo}>
                    <Text>Village </Text>
                    <Text>:{tempData?.village}</Text>
                </View>
                <View style={styleGlobal.subViewInfo}>
                    <Text>Postal Code </Text>
                    <Text>:{tempData?.postal_code}</Text>
                </View>
            </View>

        </View>

    );
}

export default ThirdPage;