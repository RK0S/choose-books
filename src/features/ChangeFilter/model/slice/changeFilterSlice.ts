import { createSlice } from '@reduxjs/toolkit'

interface filterType {
    filter: string
}

interface filterAction { 
    type: string
    payload: string
}

export const initialState: filterType ={
    filter: 'all'
}

export const changeFilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action: filterAction) {
            state.filter = action.payload
        }
    }
})

export default changeFilterSlice.reducer