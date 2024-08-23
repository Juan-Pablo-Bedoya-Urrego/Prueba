import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    title: {
        alignContent: 'center',
        fontSize: 20,
        color: 'black',
        marginHorizontal: 50,
        marginVertical: 50,
    },
    text: {

        alignSelf: 'flex-start',
        fontSize: 16,
        marginBottom: 8,
        color: '#000000',

    },
    textInput: {
        height: 40,
        width: '100%',
        padding: 35,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        fontSize: 20,
        fontFamily: 'Arial, sans-serif',
      }
      





});

export default profileStyles;