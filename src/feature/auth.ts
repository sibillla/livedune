import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../index'

const initialState: InitialState = {
  isLogged: false,
  error: false
}

interface Credentials {
  email: string
  password: string
}

export interface InitialState {
  isLogged: boolean
  error: boolean
}

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Credentials>) => {
      const {
        payload: {email, password}
      } = action
      const validCredentials = email === 'example@example.com' && password === 'password2021'
      if (validCredentials) {
        state.isLogged = true
        state.error = false
      } else {
        state.error = true
        state.isLogged = false
      }
    },
    logout: (state) => {
      state.isLogged = false
      state.error = false
    },
    register: (state) => {
      state.isLogged = true
      state.error = false
    }
  }
})

export const {login, register, logout} = AuthSlice.actions

export const selectIsLogged = (state: RootState) => state.auth.isLogged
export const selectIsError = (state: RootState) => state.auth.error
