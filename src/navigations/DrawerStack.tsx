import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Refreshment from '../screens/Refreshment/Refreshment';
import Account from '../screens/Account/Account';
import Membership from '../screens/Membership/Membership';
import TabStack from './TabStack';

const Drawer = createDrawerNavigator();

const DrawerStack = function DrawerStack() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={TabStack} />
      <Drawer.Screen name="Membership" component={TabStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
