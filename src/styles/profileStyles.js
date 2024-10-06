import { StyleSheet } from 'react-native';

const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        alignItems: 'center',
    },
    firstTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderColor: '#ddd',
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#00B8EB',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    nameInput: {
        color: '#000',
        borderColor: '#000',
        borderWidth: 1,
    }
});

export default profileStyles;