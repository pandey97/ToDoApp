import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Pressable } from 'react-native';
import { CONSTANTS, SCREENS } from '../../shared/constants';
import AnimatedInput from '../../components/FloatingLabelInput';
import Button from '../../components/button';
import { navigate } from '../../services/navigation';
import styles from './LoginScreen.style';
import withLoader from '../../hocs/loderHOC';

interface LoginScreenProps {
    formData: {
        email: string;
        password: string;
    };
    onInputChange: (field: string, value: string) => void;
    onSubmit: () => void;
    errors: { [key: string]: string };
    loading: boolean
    ForgotPasswordClicked: () => void;
    googleLogin: () => void;
    GoogleSigninButton: any
}

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inputContainer}>
                    <View >
                        <Text style={styles.title}>{CONSTANTS.LOGIN}</Text>
                        <Text style={styles.subtitle}>{CONSTANTS.PLEASELOGIN}</Text>
                    </View>
                    <View>
                        <AnimatedInput
                            placeholder={CONSTANTS.EMAIL}
                            value={props.formData.email}
                            onChangeText={value => props.onInputChange('email', value)}
                            error={props.errors.email}
                        />
                        <AnimatedInput
                            placeholder={CONSTANTS.PASSWORD}
                            value={props.formData.password}
                            showForgotPassword={true}
                            onChangeText={value => props.onInputChange('password', value)}
                            error={props.errors.password}
                            secureTextEntry={true}
                            ForgotPassword={props.ForgotPasswordClicked}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            text={CONSTANTS.LOGIN.toUpperCase()}
                            onPress={async () => props.onSubmit()}
                        />
                        <View style={styles.bottomButton}>
                            <Text>{CONSTANTS.DONTACCOUNT}</Text>
                            <TouchableOpacity onPress={async () => navigate(CONSTANTS.REGISTER)}>
                                <Text style={styles.loginButton}>{CONSTANTS.REGISTER}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                        <Text style={styles.text}>or</Text>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.googleButton}>
                        <props.GoogleSigninButton
                            size={props.GoogleSigninButton.Size.Wide}
                            color={props.GoogleSigninButton.Color.Dark}
                            onPress={props.googleLogin}
                            disabled={props.loading}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default withLoader(LoginScreen);
