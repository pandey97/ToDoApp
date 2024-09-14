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
        marginVertical: 5, // adds vertical spacing between elements
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', // centers text horizontally
        marginBottom: 5,    // space below the title
        alignSelf:'flex-start',
        color:"#44aafe"
    },
    subtitle: {
        fontSize: 22,
        textAlign: 'center', // centers text horizontally
        marginBottom: 20,    // space below the subtitle
        alignSelf:'flex-start',
        color:'#aaa8ad'
    },
    buttonContainer: {
        alignItems: 'center', // Center the button horizontally
        marginTop: 20,
        width:'100%',
    },
    bottomButton: {
        flexDirection:'row',
        marginVertical:20
    },
    loginButton: {
        color:'#44aafe',
        fontWeight:'bold',
        marginHorizontal:5
    }
});

export default styles;