import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Glyphs from '../../../assets/Glyphs';
import { CONSTANTS } from '../../../shared/constants';
import styles from './Header.style';
import { navigate } from '../../../services/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async() => {
        const userString = await AsyncStorage?.getItem('user');
        const userObject = userString ? JSON.parse(userString) : null;
        setUserName(userObject?.user?.name.split(" ")[0] || 'Guest');
    };

    const LogOutPress = async() => {
        navigate(CONSTANTS.LOGIN);
        await AsyncStorage.removeItem("user");
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <View style={styles.profileContainer}>
                    <Image source={Glyphs.Profile} style={styles.profileImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.greetingText}>{`Hi, ${userName} 👋`}</Text>
                        <Text style={styles.adventureText}>{CONSTANTS.DAILYADVENTURE}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={LogOutPress}>
                    <Text style={styles.logoutText}>{CONSTANTS.LOGOUT}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Header;
