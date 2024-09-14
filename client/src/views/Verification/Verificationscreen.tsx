import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CONSTANTS, SCREENS } from '../../shared/constants'
import AnimatedInput from '../../components/FloatingLabelInput';
import styles from './VerificationScreen.style';
import Button from '../../components/button';
import ScreenHeader from '../../components/header';

interface VerificationscreenProps {
    otp: {
        first: string,
        second: string,
        third: string,
        fourth: string,
    },
    onInputChange: (field: string, value: string) => void;
    firstRef: React.RefObject<TextInput>,
    secondRef: React.RefObject<TextInput>,
    thirdRef: React.RefObject<TextInput>,
    fourthRef: React.RefObject<TextInput>,
}

const Verificationscreen: React.FC<VerificationscreenProps> = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScreenHeader title={SCREENS.VERIFICATION} style={styles.headerStyle}/>
                <Text style={styles.verificationLineTextStyle}>{CONSTANTS.VERIFICATIONLINE}</Text>
                <Text style={styles.otpHereText}>{CONSTANTS.EnterOTPHERE}</Text>
                <View style={styles.otpContainer}>
                    <AnimatedInput
                        ref={props.firstRef}
                        value={props.otp.first}
                        onChangeText={value => props.onInputChange('first', value)}
                        maxlength={1}
                        style={styles.customInputStyle}
                    />
                    <AnimatedInput
                        ref={props.secondRef}
                        value={props.otp.second}
                        onChangeText={value => props.onInputChange('second', value)}
                        maxlength={1}
                        style={styles.customInputStyle}
                    />
                    <AnimatedInput
                        ref={props.thirdRef}
                        value={props.otp.third}
                        onChangeText={value => props.onInputChange('third', value)}
                        maxlength={1}
                        style={styles.customInputStyle}
                    />
                    <AnimatedInput
                        ref={props.fourthRef}
                        value={props.otp.fourth}
                        onChangeText={value => props.onInputChange('fourth', value)}
                        maxlength={1}
                        style={styles.customInputStyle}
                    />
                </View>
                <Button
                    text={CONSTANTS.CONTINUE}
                    style={styles.buttonStyle}
                />
                <Text style={styles.dontRecieveText}>{CONSTANTS.DIDNTRECIEVECODE}</Text>
                <TouchableOpacity>
                    <Text style={styles.resendText}>{CONSTANTS.RESEND.toUpperCase()}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Verificationscreen