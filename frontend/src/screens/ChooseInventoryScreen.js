import React from "react";
import { View, Text, Button } from "react-native";



const ChooseInventoryScreen = () => {

    return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}} >
            <Text> Choisissez votre inventaire </Text>
            <Button title="Valider"/>
        </View>
    )
}

export default ChooseInventoryScreen
