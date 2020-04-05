import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

const Tab = createMaterialTopTabNavigator();

export default function MaterialTopTabNavigator({ navigation, route }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Links"
        component={LinksScreen}
      />
    </Tab.Navigator>
  );
}
