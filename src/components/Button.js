import React from "react";
import { Button } from "react-native";

const AppButton = () => {
    return (
        <Button 
        title="Tap Me!" 
        onPress={() => {
            alert('You tapped the button!');
        }}/>
    )
}

export default AppButton;