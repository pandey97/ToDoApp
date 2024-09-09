import React, { useEffect, useState } from 'react';
import LoginScreen from '../views/Login/LoginScreen';
import { navigate } from '../services/navigation';
import { SCREENS } from '../shared/constants';
import { GetUserDetail } from '../controllers/authController';
import { Alert } from 'react-native';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const LoginViewModel = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState<boolean>(false); 

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
        setLoading(true);
        if (validateForm()) {
            try {
                const response = await GetUserDetail(formData);
                if(response.isSuccess){
                    storage.set('user', JSON.stringify(response?.data));
                    navigate(SCREENS.HOME);
                }else{
                    Alert.alert('Login Error', 'Email and Password not matched.', [{ text: 'OK' }]);
                }
            } catch (error) {
                console.error('Login error:', error);
            }
        }
        setLoading(false); 
    };

    return (
        <LoginScreen
            formData={formData}
            onInputChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            loading={loading}
        />
    );
};

export default LoginViewModel;
