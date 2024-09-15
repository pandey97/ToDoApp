import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal:20
    },
    verificationLineTextStyle: {
        width:"60%",
        lineHeight:20,
        color:"#848181"
    },
    otpHereText: {
        color:"#232323",
        fontSize:18,
        fontWeight:'bold',
        marginTop:30
    },
    headerStyle: {
        marginBottom:30,
        marginTop:10
    },
    otpContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        width:"80%",
        alignSelf:'center',
        marginTop:5
    },
    customInputStyle: {
        width:50
    },
    buttonStyle: {
        marginVertical:40
    },
    dontRecieveText: {
        alignSelf:'center',
        color:"#848181",
        marginBottom:10,
        fontSize:15
    },
    resendText: {
        alignSelf:'center',
        fontSize:18,
        fontWeight:'bold',
        color: '#44aafe'
    }
});

export default styles;