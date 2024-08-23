import React from "react";
import { View, Text, Image,TextInput } from "react-native";
import profileStyles from "../styles/profileStyles";


const Profile = () => {
    const name = 'Camila';
    const lastName = 'Lopez';
    const birthdate = '10/11/2006';

    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.title}>Perfil</Text>
            <Text style={profileStyles.text}> Name{name}</Text>
            <Text style={profileStyles.text}>lastName{lastName}</Text>
            <Text style={profileStyles.text}> BirthDate{birthdate}</Text>
            <TextInput style={profileStyles.textInput}></TextInput>

        </View>
    );
}

export default Profile;
