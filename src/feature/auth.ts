import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from '../index'

const initialState: InitialState = {
  isLogged: false,
  isError: false,
  isLoading: false
}

interface Credentials {
  email: string
  password: string
}

export interface InitialState {
  isLogged: boolean
  isError: boolean
  isLoading: boolean
}

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogged = false
      state.isError = false
    },
    register: (state) => {
      state.isLogged = true
      state.isError = false
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('fulfilled')
      state.isError = false
      state.isLogged = true
    })
    builder.addCase(login.pending, (state, action) => {
      console.log('pending')
      state.isError = false
    })
    builder.addCase(login.rejected, (state, action) => {
      console.log('reject')
      state.isError = true
      state.isLogged = false
    })
  }
})

export const {register, logout, setLoading} = AuthSlice.actions

export const selectIsLogged = (state: RootState) => state.auth.isLogged
export const selectIsError = (state: RootState) => state.auth.isError
export const selectIsLoading = (state: RootState) => state.auth.isLoading

export const login = createAsyncThunk<boolean, Credentials>(
  'user/auth',
  async ({email, password}, thunkApi) => {
    const validCredentials = email === 'example@example.com' && password === 'password2021'
    thunkApi.dispatch(setLoading(true))
    return new Promise((res, rej) => {
      setTimeout(() => {
        thunkApi.dispatch(setLoading(false))
        if (validCredentials) {
          res(validCredentials)
        } else {
          rej('invalid')
        }
      }, 800)
    })
  }
)
