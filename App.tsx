import {View, Text} from 'react-native';
import React from 'react';
import RootStack from './Src/Navigation/RootStack';
import {Provider} from 'react-redux';
import store from './Src/Redux/Store';
import {ToastComponent} from './Src/Utils/helperFn';

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
      <ToastComponent />
    </Provider>
  );
}
