import { createSlice } from '@reduxjs/toolkit'

interface sortingType {
    sorting: string
}

interface actionType { 
    type: string
    payload: string
}

export const initialState: sortingType ={
    sorting: 'relevance'
}

export const changeSortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSorting(state, action: actionType) {
            state.sorting = action.payload
        }
    }
})

export default changeSortingSlice.reducer