import { combineReducers, configureStore } from "@reduxjs/toolkit";
import changeSortingSlice from "src/features/ChangeSorting/model/slice/changeSortingSlice";
import queryReducer from 'src/features/SearchBooks/models/slice/querySlice'
import changeFilterSlice from 'src/features/ChangeFilter/model/slice/changeFilterSlice';
import booksSlice from "src/widgets/BooksWidget/model/slice/booksSlice";

const rootReducer = combineReducers({
    query: queryReducer,
    filter: changeFilterSlice,
    sorting: changeSortingSlice,
    booksInfo: booksSlice
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']