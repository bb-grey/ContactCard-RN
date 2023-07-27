import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import ChatStack from './ChatStack';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
