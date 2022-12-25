import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import {AuthSlice} from './feature/auth'
import {App} from './App'
import './index.scss'
import {RecoverySlice} from './feature/recovery'

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    recover: RecoverySlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
