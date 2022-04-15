import React from "react";
import { Text, TouchableOpacity } from "react-native";

const AppButton = (props) => {
    return (
        <TouchableOpacity 
        onPress={props.buttonPress}
        style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Click Me</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 6,
        paddingBottom: 6,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#474749',
        padding: 3,
        width: '90%'   
    }
}

export default AppButton;

