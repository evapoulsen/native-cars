import React from "react";
import { View } from "react-native";

const ItemSection = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        borderColor: '#dcdcdc',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative'
    }
};

export default ItemSection;

