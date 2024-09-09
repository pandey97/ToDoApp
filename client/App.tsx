import React from 'react'
import Navigation from './src/route'
import { Provider } from 'react-redux'
import store from './src/redux/store/Store'

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;