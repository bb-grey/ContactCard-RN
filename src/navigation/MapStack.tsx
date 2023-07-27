import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SettingsHomeScreen from '@screens/settings/SettingsHome';
import {MapStackParamList} from '@utils/types';
import React from 'react';

const Stack = createNativeStackNavigator<MapStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const MapStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="MapScreen" component={MapStack} />
    </Stack.Navigator>
  );
};

export default MapStack;
