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

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userToken && (
          <>
            <Stack.Screen name={SCREENS.LOGIN} component={LoginViewModel} />
            <Stack.Screen name={SCREENS.REGISTER} component={RegisterViewModel} />
          </>

        )}
        <Stack.Screen name={SCREENS.HOME} component={HomeViewModel}/>
        {
          userToken && (
            <>
              <Stack.Screen name={SCREENS.LOGIN} component={LoginViewModel} />
              <Stack.Screen name={SCREENS.REGISTER} component={RegisterViewModel} />
            </>
  
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;