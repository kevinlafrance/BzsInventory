import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import ChooseInventoryScreen from "../screens/ChooseInventoryScreen";
import IdentificationScreen from "../screens/IdentificationScreen";


const Stack = createNativeStackNavigator();

function NavigationStack() {
    return (

        <Stack.Navigator initialRouteName="Home" 
                            screenOptions={{
                                headerStyle: {
                                    backgroundColor: '#f4511e',
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                },
                            }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Identification" component={IdentificationScreen}/>
            <Stack.Screen name="Inventaires" component={ChooseInventoryScreen}/>
        </Stack.Navigator>
    )
}

export default NavigationStack