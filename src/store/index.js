import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import countriesReducer from '../slices/countriesSlice'


export default configureStore({
reducer: {
auth: authReducer,
countries: countriesReducer,
}
})