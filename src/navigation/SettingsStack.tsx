import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SettingsHomeScreen from '@screens/settings/SettingsHome';
import {SettingsStackParamList} from '@utils/types';
import React from 'react';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="SettingsHome" component={SettingsHomeScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
