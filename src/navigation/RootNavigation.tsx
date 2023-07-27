import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeTabNavigation from './HomeTabNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeTabNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
