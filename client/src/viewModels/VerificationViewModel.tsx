import React, { useEffect, useRef, useState } from 'react'
import Verificationscreen from '../views/Verification/Verificationscreen'
import { TextInput } from 'react-native';

interface VerificationViewModelProps {
    route: any
}

const VerificationViewModel: React.FC<VerificationViewModelProps> = ({ route }) => {

    const [otp, setOtp] = useState({
        first: "",
        second: "",
        third: "",
        fourth: ""
    });

    useEffect(() => {

    }, []);

    const firstRef = useRef<TextInput>(null);
    const secondRef = useRef<TextInput>(null);
    const thirdRef = useRef<TextInput>(null);
    const fourthRef = useRef<TextInput>(null);

    const onInputChange = (field: string, value: string) => {
        setOtp(prevData => ({
            ...prevData,
            [field]: value,
        }));
        if (value.length === 1) {
            switch (field) {
                case 'first':
                    secondRef.current?.focus();
                    break;
                case 'second':
                    thirdRef.current?.focus();
                    break;
                case 'third':
                    fourthRef.current?.focus();
                    break;
            }
        } else if (value.length === 0) {
            switch (field) {
                case 'second':
                    firstRef.current?.focus();
                    break;
                case 'third':
                    secondRef.current?.focus();
                    break;
                case 'fourth':
                    thirdRef.current?.focus();
                    break;
            }
        }
    };

    return (
        <Verificationscreen
            {...{
                otp,
                onInputChange,
                firstRef,
                secondRef,
                thirdRef,
                fourthRef

            }}
        />
    )
}

export default VerificationViewModel