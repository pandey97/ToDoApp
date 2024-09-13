import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Glyphs from '../../../assets/Glyphs';
import { CONSTANTS } from '../../../shared/constants';
import { MMKV } from 'react-native-mmkv';
import styles from './Header.style';
import { navigate } from '../../../services/navigation';

const storage = new MMKV();

const Header = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const fetchUserDetails = () => {
            const userString = storage.getString('user');
            const userObject = userString ? JSON.parse(userString) : null;
            setUserName(userObject?.user?.name.split(" ")[0] || 'Guest');
        };
        fetchUserDetails();
    }, []);

    const LogOutPress = () => {
        navigate(CONSTANTS.LOGIN);
        storage.delete("user");
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
