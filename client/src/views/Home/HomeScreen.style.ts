import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#FEF9D9",
      flex:1
    },
    addContainer: {
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      padding:20,
      borderRadius:40,
      height:80,
      width:80,
      backgroundColor:'#E6D9A2',
      marginBottom:10
    },
    addButton: {
      height:60,
      width:60
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
      width: '80%',
      padding: 20,
      backgroundColor: '#FEF9D9',
      borderRadius: 10,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 10,
    },
    todoContainer: {
      flexDirection: 'row', // Layout items horizontally
      backgroundColor: '#D1E9F6',
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    iconContainer: {
      flexDirection: 'row', // Icons are displayed horizontally
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
      marginLeft: 10, // Space between edit and delete icons
    },
    textContainer: {
      flex: 1, // Take up remaining space
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
      fontSize: 14,
      marginTop: 5,
    },
  });

  export default styles;