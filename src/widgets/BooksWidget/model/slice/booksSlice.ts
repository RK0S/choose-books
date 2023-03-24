
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface payloadType {
    kind: string
    totalItems: number
    items?: []
}

export interface BookState {
    books: any[]
    isLoading: boolean
    error: string
    totalItems: number
}

const initialState: BookState = {
    books: [],
    isLoading: false,
    error: '',
    totalItems: 0
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        booksFetching(state) {
            state.isLoading = true
        },
        booksFetchingSuccess(state, action: PayloadAction<payloadType>) {
            state.isLoading = false
            if (action.payload.items) {
                state.books = action.payload.items
            }
            state.totalItems = action.payload.totalItems
        },
        booksFetchingMore(state, action: PayloadAction<payloadType>) {
            state.isLoading = false
            if (action.payload.items) {
                state.books = state.books.concat(action.payload.items)
            }
        },
        booksFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default booksSlice.reducer