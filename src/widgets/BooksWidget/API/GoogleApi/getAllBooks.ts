import axios from 'axios'
import { AppDispatch } from 'src/app/providers/StoreProvider/config/store';
import { booksSlice } from '../../model/slice/booksSlice';

export const getAllBooks =  ([query, filter, sorting]: string[]) => async(dispatch: AppDispatch) => {
    if (!query) return 
    const key = 'AIzaSyCuqeFXVNrq2zlsplouPfPr61lEE1_adGc'
    if (filter === 'all') filter = ''

    try {
        dispatch(booksSlice.actions.booksFetching())
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}+subject:${filter}&orderBy=${sorting}&startIndex=0&maxResults=30&key=${key}`)
        dispatch(booksSlice.actions.booksFetchingSuccess(res.data))
    } catch (e: unknown) {
        if (typeof e === "string") {
            dispatch(booksSlice.actions.booksFetchingError(e.toUpperCase()))
        } else if (e instanceof Error) {
            dispatch(booksSlice.actions.booksFetchingError(e.message))
        }
    }
}