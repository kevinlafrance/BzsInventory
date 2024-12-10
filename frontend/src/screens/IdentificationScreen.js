import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import styled from 'styled-components';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from "../components/Loader";

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #cb0f00;
  align-items: center;
`;

const FormSection = styled.View`
  flex-direction: row;
  height: 40px;
  margin-top: 20px;
  margin-left: 35px;
  margin-right: 35px;
  margin: 10px;
`;

const FormInput = styled.TextInput`
  flex: 1;
  color: #FFFFFF;
  padding: 0 10px;
  border-width: 1px;
  border-radius: 30px;
  border-color: #dadae8;
`;

const ErrorText = styled.Text`
  color: #e60000; 
  text-align: center;
  font-size: 14px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #000000;
  color: #FFFFFF;
  height: 60px;
  align-items: center;
  border-radius: 15px;
  margin: 20px 35px 25px 35px;
`;

const LoginTextButton = styled.Text`
  color: #FFFFFF;
  padding: 18px;
  font-size: 20px;
  text-transform: uppercase;
`;





const IdentificationScreen = () => {

    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const handleSubmitPress = () => {
        setErrorText('');
        if (!userEmail) {
            alert('Veuillez introduire votre adresse Mail');
            return
        }

        const body = {
            email: userEmail,
        }
        JSON.stringify(body);

        setLoading(true);

        axios.post("http://localhost:5000/auth/login", body)
        .then((response) => {
            setLoading(false);
            if (response.status === 201 ) {
                console.log(response)
                const userInfo = {
                   email: response.data.candidate.email,
                   firstname: response.data.candidate.firstname,
                   lastname: response.data.candidate.lastname,
                   id: response.data.candidate._id
                 }
                 AsyncStorage.setItem('user_id', response.data.candidate._id);
                 console.log(response.data.candidate)
                 navigation.push('Inventaires', { params: response.data.candidate});
                } else {
                    setErrorText(response.data);
                    console.log('Please check your email id or password');
                  }
            })
            .catch((error) => {
               setLoading(false);
                console.error(error);
              });
    }

    return (

        <MainView>
        <Loader loading={loading} />
           <KeyboardAvoidingView enabled>
             <FormSection>
               <FormInput
               onChangeText={(userEmail) => 
                 setUserEmail(userEmail)
               }
               placeholder="E-mail"
               placeholderTextColor="#8b9cb5"
               autoCapitalize="none"
               keyboardType="email-address"
               returnKeyType="next"
               underlineColorAndroid="#f000"
                 blurOnSubmit={false}
               />
             </FormSection>
               {errorText != '' ? (
               <ErrorText>
                 {errorText}
               </ErrorText>
             ) : null}
               <LoginButton
               activeOpacity={0.5}
               onPress={handleSubmitPress}>
                 <LoginTextButton>connexion avec email</LoginTextButton>
               </LoginButton>
           </KeyboardAvoidingView>
     </MainView>
   );
 };
export default IdentificationScreen