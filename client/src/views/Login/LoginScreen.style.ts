import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // centers vertically
        alignItems: 'center',     // centers horizontally
        backgroundColor: '#f8f9fa', // optional background color
    },
    inputContainer: {
        width: '80%',  // to make the input fields responsive
        marginVertical: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', // centers text horizontally
        marginBottom: 5,    // space below the title
        alignSelf: 'flex-start',
        color: "#44aafe"
    },
    subtitle: {
        fontSize: 22,
        textAlign: 'center', // centers text horizontally
        marginBottom: 20,    // space below the subtitle
        alignSelf: 'flex-start',
        color: '#aaa8ad'
    },
    buttonContainer: {
        alignItems: 'center', // Center the button horizontally
        marginTop: 20,
    },
    bottomButton: {
        flexDirection: 'row',
        marginVertical: 20
    },
    loginButton: {
        color: '#44aafe',
        fontWeight: 'bold',
        marginHorizontal: 5
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#d3d3d3'
    },
    text: {
        marginHorizontal: 10,
        color: '#888'
    },
    googleButton: {
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
        backgroundColor:'#4285F4',
        marginVertical:20
    },
    facebookButton: {
        backgroundColor: '#4267B2',
        borderRadius: 5,
        alignItems: 'center',
        width: '100%'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
    },
});

export default styles;