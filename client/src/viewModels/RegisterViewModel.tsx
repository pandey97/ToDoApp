import React, { useState } from 'react';
import RegisterScreen from '../views/Register/RegisterScreen';
import { navigate } from '../services/navigation';
import { SCREENS } from '../shared/constants';
import { SetUserDetail } from '../controllers/authController';
import { RegisterUser, RegisterUserData } from '../models/UserModel';
import { Alert } from 'react-native';

const RegisterViewModel = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormData] = useState<RegisterUserData>({
        name: '',
        email: '',
        password: '',
        mobileNumber: '',
    });
    const [confirmPassword,setConfirmPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false); 

    const handleChange = (field: string, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        else if (formData.password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        setLoading(true);
        if (validateForm()) {
            try {
                const response = await SetUserDetail(formData);
                if(response.isSuccess){
                    navigate(SCREENS.LOGIN);
                }else{
                    Alert.alert('Registration Error', 'Something went wrong during registration. Please try again.', [{ text: 'OK' }]);
                }
            } catch (error) {
                console.error('Registration error:', error);
            }
        }
        setLoading(false);
    };

    return (
        <RegisterScreen
            formData={formData}
            onInputChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            loading={loading}
        />
    );
};

export default RegisterViewModel;
