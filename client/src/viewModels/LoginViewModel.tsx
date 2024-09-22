import React, { useEffect, useState } from 'react';
import LoginScreen from '../views/Login/LoginScreen';
import { navigate } from '../services/navigation';
import { SCREENS } from '../shared/constants';
import { GetUserDetail, SetUserDetail } from '../controllers/authController';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    GoogleSignin,
    GoogleSigninButton
} from '@react-native-google-signin/google-signin';
import { LoginManager, GraphRequest, GraphRequestManager, LoginButton } from "react-native-fbsdk";

// interface UserData {
//     name: string;
//     email: string;
//     password: string;
//     mobileNumber: string;
// }

const LoginViewModel = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState<boolean>(false);

    const googleLogin = async () => {
        try {
            setLoading(true);
            GoogleSignin.configure();
            await GoogleSignin.hasPlayServices();
            const response = await GoogleSignin.signIn();
            if (response.type === "success") {
                navigate(SCREENS.HOME);
            }
            // const {
            //     name ,
            //     email,
            //     id
            // } = response?.data?.user || { name: '', email: '', id: '' };

            // const data: UserData = {
            //     name,
            //     email,
            //     password: id,
            //     mobileNumber: "xxxxxxxxxxx"
            // }
            // console.log(data);
            // const setUser = await SetUserDetail(data);
            // console.log("setUser",setUser);
            // if (setUser.isSuccess) {
            //     await AsyncStorage.setItem('user', JSON.stringify(response?.data));
            //     navigate(SCREENS.HOME);
            // } else {
            //     Alert.alert('Registration Error', 'Something went wrong during registration. Please try again.', [{ text: 'OK' }]);
            // }
            // console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const fbLogin = (resCallback: any) => {
        LoginManager.logOut();
        LoginManager.logInWithPermissions(['email', 'public_profile']).then(
            result => {
                if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
                    resCallback({ message: "Email is required" })
                }
                if (result.isCancelled) {
                    console.log("error");
                } else {
                    const infoRequest = new GraphRequest(
                        '/me?fields=email,name,picture',
                        null,
                        resCallback
                    );
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            function (error: any) {
                console.log("Login fail with error:" + error)
            }
        )
    }

    const onFbLogin = () => {
        try {
            fbLogin(_responseInfoCallBack);
        } catch (error) {
            console.log(error);
        }
    }

    const _responseInfoCallBack = async (error: any, result: any) => {
        if (error) {
            console.log("error", error);
            return;
        }
        else {
            const userData = result;
            if (userData.email) {
                navigate(SCREENS.HOME);
            }
        }
    }

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
                console.log(response);
                if (response.isSuccess) {
                    await AsyncStorage.setItem('user', JSON.stringify(response?.data));
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
            googleLogin={googleLogin}
            onFbLogin={onFbLogin}
            GoogleSigninButton={GoogleSigninButton}
            LoginButton={LoginButton}
        />
    );
};

export default LoginViewModel;
