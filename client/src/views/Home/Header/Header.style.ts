import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#E6D9A2',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // To make the image circular
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    adventureText: {
        fontSize: 14,
        color: '#b7b5b5',
    },
    logoutButton: {
        backgroundColor:"#FFB200",
        borderRadius:6
    },
    logoutText:{
        color:"black",
        padding:10
    }
});

export default styles;