import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isReadyRef, navigationRef } from '../services/navigation';
import { SCREENS } from '../shared/constants';
import LoginViewModel from '../viewModels/LoginViewModel';
import RegisterViewModel from '../viewModels/RegisterViewModel';
import HomeViewModel from '../viewModels/HomeViewModel';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.REGISTER} component={RegisterViewModel} />
        <Stack.Screen name={SCREENS.LOGIN} component={LoginViewModel} />
        <Stack.Screen name={SCREENS.HOME} component={HomeViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;