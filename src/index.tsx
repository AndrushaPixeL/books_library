import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StoreContext } from 'redux-react-hook'
import { store } from './store'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Provider store={store}>
        <App />
      </Provider>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
