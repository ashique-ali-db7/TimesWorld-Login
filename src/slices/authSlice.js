import { createSlice } from '@reduxjs/toolkit'


const authSlice = createSlice({
name: 'auth',
initialState: { isAuthed: false, user: null },
reducers: {
loginSuccess: (state, { payload }) => {
state.isAuthed = true
state.user = payload
},
logout: (state) => { state.isAuthed = false; state.user = null }
}
})

export default authSlice.reducer
export const { loginSuccess, logout } = authSlice.actions
