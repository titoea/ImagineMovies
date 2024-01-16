import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigationContainer from './navigations/AppNavigationContainer';
import AuthProvider from './providers/AuthProvider/AuthProvider';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <AppNavigationContainer />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
