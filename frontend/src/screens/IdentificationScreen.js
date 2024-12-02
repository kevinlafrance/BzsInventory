import react from "react";
import { TextInput } from "react-native";

const IdentificationScreen = () => {
    return (

        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}} >
            <TextInput>  </TextInput>
            <Button title="Valider" onPress={() => navigation.navigate('Inventaires')}/>
        </View>
    )
}

export default IdentificationScreen