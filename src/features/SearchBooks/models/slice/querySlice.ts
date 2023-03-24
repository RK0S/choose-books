import { createSlice } from '@reduxjs/toolkit'

interface queryType {
    query: string
}

interface actionType { 
    type: string
    payload: string
}

export const initialState: queryType ={
    query: ''
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery(state, action: actionType) {
            state.query = action.payload
        }
    }
})

export default querySlice.reducer