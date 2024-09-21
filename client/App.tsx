import React from 'react'
import Navigation from './src/route'
import { Provider } from 'react-redux'
import store from './src/redux/store/Store'
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

if (__DEV__) {
  import("./ReactotronConfig").then(() =>
    console.log("Reactotron Configured for RNTypescriptBoilerplate"),
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;