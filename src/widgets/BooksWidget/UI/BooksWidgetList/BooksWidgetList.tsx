import TitleResults from '../TitleResults/TitleResults';
import {BookList} from 'src/entites/Book';
import { memo } from 'react';

import cls from '../../styles/BooksWidget.module.scss'
import Button from 'src/shared/UI/Button/Button';

interface BooksWidgetListProps {
    books: any[]
    totalItems: number
    getMoreBooks: () => void
}

const BooksWidgetList = memo(({books, totalItems, getMoreBooks}: BooksWidgetListProps) => {
    
    

    return (
        <>
            <TitleResults children={totalItems} className={cls.BooksWidget__title} />
            <BookList books={books} />  
            <Button children='Загрузить ещё' onClick={getMoreBooks} />
        </>
    );
});

export default BooksWidgetList;