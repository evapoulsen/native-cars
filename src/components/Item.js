import React from "react";
import { View } from "react-native";

const Item = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderColor: '"#dcdcdc',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOffSet: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 2
    }
};

export default Item;

