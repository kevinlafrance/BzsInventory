import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Text, Button } from "react-native";



const HomeScreen = () => {

    const navigation = useNavigation();


    return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}} >
            <Text> Bienvenue sur les inventaires numériques de Béziers </Text>
            <Button title="Commencer" onPress={() => navigation.navigate('Inventaires')}/>
        </View>
    )
}

export default HomeScreen
