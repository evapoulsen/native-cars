import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyling}>Cars</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyling: {
        fontSize: 22
    },
    viewStyle: {
        backgroundColor: 'grey',
        padding: 10
    }
});
export default Header;

