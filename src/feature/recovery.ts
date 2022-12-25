import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from 'index'

const initialState: InitialState = {
  isLoading: false,
  isSuccess: false,
  isError: false
}

export type InitialState = {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export const RecoverySlice = createSlice({
  name: 'RecoverySlice',
  initialState,
  reducers: {
    resetRecovery: (state) => {
      state.isSuccess = false
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(recoverPassword.fulfilled, (state, action) => {
      state.isError = false
      state.isSuccess = true
    })
    builder.addCase(recoverPassword.pending, (state, action) => {
      state.isError = false
    })
    builder.addCase(recoverPassword.rejected, (state, action) => {
      state.isError = true
      state.isSuccess = false
    })
  }
})

export const {resetRecovery, setLoading} = RecoverySlice.actions
export const selectRecoverState = (state: RootState) => state.recover
export const recoverPassword = createAsyncThunk<boolean, string>(
  'user/recoverPassword',
  async (email: string, thunkApi) => {
    const validEMail = email === 'example@example.com'
    thunkApi.dispatch(setLoading(true))

    return new Promise((res, rej) => {
      setTimeout(() => {
        thunkApi.dispatch(setLoading(false))
        if (validEMail) {
          res(validEMail)
        } else {
          rej('invalid')
        }
      }, 800)
    })
  }
)
