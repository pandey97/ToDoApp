import React, { useEffect, useState } from 'react';
import LoginScreen from '../views/Login/LoginScreen';
import { navigate } from '../services/navigation';
import { SCREENS } from '../shared/constants';
import { GetUserDetail } from '../controllers/authController';
import { Alert } from 'react-native';
import { MMKV } from 'react-native-mmkv';
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from '@react-native-google-signin/google-signin';

const storage = new MMKV();

const LoginViewModel = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     GoogleSignin.configure();
    // },[])

    // const googleLogin = async () => {
    //     try {
    //       await GoogleSignin.hasPlayServices();
    //       const response = await GoogleSignin.signIn();
    //       console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   };

    const handleChange = (field: string, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            setLoading(true);
            try {
                const response = await GetUserDetail(formData);
                if (response.isSuccess) {
                    storage.set('user', JSON.stringify(response?.data));
                    navigate(SCREENS.HOME);
                    setFormData({
                        email: '',
                        password: ''
                    })
                } else {
                    Alert.alert('Login Error', 'Email and Password not matched.', [{ text: 'OK' }]);
                }
            } catch (error) {
                console.error('Login error:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const ForgotPasswordClicked = () => {
        navigate(SCREENS.VERIFICATION, formData.email);
    }

    return (
        <LoginScreen
            formData={formData}
            onInputChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            loading={loading}
            ForgotPasswordClicked={ForgotPasswordClicked}
            // googleLogin={googleLogin}
        />
    );
};

export default LoginViewModel;
