import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import CallListingScreen from '@screens/call/CallListingScreen';
import {CallStackParamList} from '@utils/types';
import React from 'react';

const Stack = createNativeStackNavigator<CallStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const CallStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="CallListingScreen" component={CallListingScreen} />
    </Stack.Navigator>
  );
};

export default CallStack;
