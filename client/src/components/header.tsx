import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Glyphs from '../assets/Glyphs'
import { goBack } from '../services/navigation'

interface ScreenHeaderProps {
    title: string,
    style?: object
}

const ScreenHeader: React.FC<ScreenHeaderProps> = (props) => {
    return (
        <View style={[styles.headerStyle,props.style]}>
            <TouchableOpacity style={styles.backArrowContainer} onPress={async () => goBack()}>
                <Image source={Glyphs.back} style={styles.backArrow} />
            </TouchableOpacity>
            <Text style={styles.verificationText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row'
    },
    backArrowContainer: {
        height: 40,
        width: 40,
        borderRadius:20,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    backArrow: {
        height: 30,
        width: 30
    },
    verificationText: {
        marginHorizontal:20,
        alignSelf:'center',
        fontSize:24,
        fontWeight:'bold'
    }
})

export default ScreenHeader;