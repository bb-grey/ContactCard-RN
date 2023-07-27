import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ExploreScreen from '@screens/explore/ExploreScreen';
import {ExploreStackParamList} from '@utils/types';
import React from 'react';

const Stack = createNativeStackNavigator<ExploreStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
