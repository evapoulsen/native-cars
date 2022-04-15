import React from "react";
import { View, Text, Image } from "react-native";
import AppButton from "./Button";
import Item from "./Item";
import ItemSection from "./ItemSection";

const CarDetail = ({brand}) => {
    return (
        <Item>
            <ItemSection>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{brand.brand}</Text>
                    <Text style={styles.headerText}>{brand.model[0].name}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <ItemSection>
                    <Image 
                    style={styles.imageStyle}
                    source={{ uri: brand.model[0].image }}
                    />
                </ItemSection>
            </ItemSection>
            <ItemSection>
                <AppButton />
            </ItemSection>
        </Item>
    )
}

const styles= {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    imageStyle : {
        height: 300,
        width: 300
    }
}
export default CarDetail;

