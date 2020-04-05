import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';

import MaterialTopTabNavigator from '../navigation/MaterialTopTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MaterialTopTabNavigator}
      />
    </Drawer.Navigator>
  );
}
