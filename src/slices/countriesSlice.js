import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchCountries = createAsyncThunk('countries/fetch', async () => {
const url = 'https://restcountries.com/v2/all?fields=name,region,flag'
const { data } = await axios.get(url)
return data
})


const countriesSlice = createSlice({
name: 'countries',
initialState: {
all: [], // original
view: [], // filtered + paginated
status: 'idle',
error: null,
filterRegion: 'All',
pageSize: 20,
page: 1,
},
reducers: {
setRegion: (state, { payload }) => {
state.filterRegion = payload
state.page = 1
const list = payload === 'All' ? state.all : state.all.filter(c => c.region === payload)
state.view = list.slice(0, state.pageSize)
},
loadMore: (state) => {
state.page += 1
const list = state.filterRegion === 'All' ? state.all : state.all.filter(c => c.region === state.filterRegion)
state.view = list.slice(0, state.page * state.pageSize)
}
},
extraReducers: builder => {
builder
.addCase(fetchCountries.pending, (state)=>{ state.status='loading' })
.addCase(fetchCountries.fulfilled, (state, { payload })=>{
state.status='succeeded'
state.all = payload
// initialize derived view
state.view = payload.slice(0, state.pageSize)
})
.addCase(fetchCountries.rejected, (state, action)=>{
state.status='failed'
state.error = action.error.message
})
}
})

export default countriesSlice.reducer
export const { setRegion, loadMore } = countriesSlice.actions
