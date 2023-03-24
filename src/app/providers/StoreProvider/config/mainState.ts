import { filterType } from '../../../../features/ChangeFilter';
import { searchQuery } from '../../../../features/SearchBooks';
import { sortingType } from '../../../../features/ChangeSorting';
import { BookState } from 'src/widgets/BooksWidget';

export interface mainState {
    query: typeof searchQuery
    filter: typeof filterType
    sorting: typeof sortingType
    booksInfo: BookState
}
