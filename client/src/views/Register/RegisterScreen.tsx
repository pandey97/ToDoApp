import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { CONSTANTS, SCREENS } from '../../shared/constants';
import AnimatedInput from '../../components/FloatingLabelInput';
import styles from './RegisterScreen.style';
import Button from '../../components/button';
import { navigate } from '../../services/navigation';
import withLoader from '../../hocs/loderHOC';

interface RegisterScreenProps {
    formData: {
        name: string;
        email: string;
        password: string;
        mobileNumber: string;
    };
    onInputChange: (field: string, value: string) => void;
    onSubmit: () => void;
    errors: { [key: string]: string };
    confirmPassword:string;
    setConfirmPassword:any
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ formData, onInputChange, onSubmit, errors, confirmPassword, setConfirmPassword }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>{CONSTANTS.REGISTER}</Text>
                <Text style={styles.subtitle}>{CONSTANTS.REGISTERDETAIL}</Text>
            </View>
            <View style={styles.inputContainer}>
                <AnimatedInput
                    placeholder={CONSTANTS.NAME}
                    value={formData.name}
                    onChangeText={value => onInputChange('name', value)}
                    error={errors.name}
                />
                <AnimatedInput
                    placeholder={CONSTANTS.EMAIL}
                    value={formData.email}
                    onChangeText={value => onInputChange('email', value)}
                    error={errors.email} 
                />
                <AnimatedInput
                    placeholder={CONSTANTS.MOBILENO}
                    value={formData.mobileNumber}
                    onChangeText={value => onInputChange('mobileNumber', value)}
                    error={errors.mobileNumber}
                />
                <AnimatedInput
                    placeholder={CONSTANTS.PASSWORD}
                    value={formData.password}
                    onChangeText={value => onInputChange('password', value)}
                    error={errors.password}
                    secureTextEntry={true}
                />
                <AnimatedInput
                    placeholder={CONSTANTS.CNFMPASSWORD}
                    value={confirmPassword}
                    onChangeText={value => setConfirmPassword(value)}
                    error={errors.confirmPassword}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text={CONSTANTS.REGISTER.toUpperCase()}
                    onPress={async () => onSubmit()}
                />
                <View style={styles.bottomButton}>
                    <Text>{CONSTANTS.ALREADYACCOUNT}</Text>
                    <TouchableOpacity onPress={async () => navigate(CONSTANTS.LOGIN)}>
                        <Text style={styles.loginButton}>{CONSTANTS.LOGIN}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default withLoader(RegisterScreen);
