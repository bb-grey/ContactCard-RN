import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import ChatListingScreen from '@screens/chat/ChatListingScreen';
import {ChatStackParamList} from '@utils/types';
import React from 'react';

const Stack = createNativeStackNavigator<ChatStackParamList>();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="ChatListingScreen" component={ChatListingScreen} />
    </Stack.Navigator>
  );
};

export default ChatStack;
