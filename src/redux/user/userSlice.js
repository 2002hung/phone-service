import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosClient from '../../apis/axiosClient'
import { toast } from 'react-toastify'

const initialState = {
  currentUser: null
}

export const loginUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  async (data) => {
    const response = await axiosClient.post('/users/login', data)

    return response.data
  }
)

export const logoutUserAPI = createAsyncThunk(
  'user/logoutUserAPI',
  async (showSuccessMessage = true) => {
    const response = await axiosClient.delete('users/logout')
    if (showSuccessMessage) {
      toast.success('Logout Successfully!')
    }
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      state.currentUser = action.payload
    });
    builder.addCase(logoutUserAPI.fulfilled, (state) => {
      state.currentUser = null
    })
  }
})

export const selectCurrentUser = (state) => {
  return state.user.currentUser
}

export const userReducer = userSlice.reducer