import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CONSTANTS, SCREENS } from '../../shared/constants';
import AnimatedInput from '../../components/FloatingLabelInput';
import Button from '../../components/button';
import { navigate } from '../../services/navigation';
import styles from './LoginScreen.style';

interface LoginScreenProps {
    formData: {
        email: string;
        password: string;
    };
    onInputChange: (field: string, value: string) => void;
    onSubmit: () => void;
    errors: { [key: string]: string };
}

const LoginScreen: React.FC<LoginScreenProps> = ({ formData, onInputChange, onSubmit, errors }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>{CONSTANTS.LOGIN}</Text>
                <Text style={styles.subtitle}>{CONSTANTS.PLEASELOGIN}</Text>
            </View>
            <View style={styles.inputContainer}>
                <AnimatedInput
                    placeholder={CONSTANTS.EMAIL}
                    value={formData.email}
                    onChangeText={value => onInputChange('email', value)}
                    error={errors.email}
                />
                <AnimatedInput
                    placeholder={CONSTANTS.PASSWORD}
                    value={formData.password}
                    showForgotPassword={true}
                    onChangeText={value => onInputChange('password', value)}
                    error={errors.password}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text={CONSTANTS.LOGIN.toUpperCase()}
                    onPress={async () => onSubmit()}
                />
                <View style={styles.bottomButton}>
                    <Text>{CONSTANTS.DONTACCOUNT}</Text>
                    <TouchableOpacity onPress={async () => navigate(CONSTANTS.REGISTER)}>
                        <Text style={styles.loginButton}>{CONSTANTS.REGISTER}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
