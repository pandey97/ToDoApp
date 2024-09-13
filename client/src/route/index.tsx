import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isReadyRef, navigationRef } from '../services/navigation';
import { SCREENS } from '../shared/constants';
import LoginViewModel from '../viewModels/LoginViewModel';
import RegisterViewModel from '../viewModels/RegisterViewModel';
import HomeViewModel from '../viewModels/HomeViewModel';
import { MMKV } from 'react-native-mmkv';

const Stack = createNativeStackNavigator();
const storage = new MMKV();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string>();

  useEffect(() => {
    const checkUserToken = async () => {
      const userString = storage.getString('user');
      const userObject = userString ? JSON.parse(userString) : null;
      setUserToken(userObject?.token);
      setIsLoading(false);
    };
    checkUserToken();
  }, []);

  if (isLoading) {
    return null; // Show a loader if needed while checking the token.
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator
        initialRouteName={userToken ? SCREENS.HOME : SCREENS.LOGIN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={SCREENS.LOGIN} component={LoginViewModel} />
        <Stack.Screen name={SCREENS.REGISTER} component={RegisterViewModel} />
        <Stack.Screen name={SCREENS.HOME} component={HomeViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;