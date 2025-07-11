import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
  // eslint-disable-next-line no-unused-vars
  extraReducers: (builder) => {}
})

export const selectCurrentUser = (state) => {
  return state.user.currentUser
}

export const userReducer = userSlice.reducer