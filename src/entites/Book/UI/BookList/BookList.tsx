import { memo } from 'react';
import BookCard from '../BookCard/BookCard';

import cls from './BookList.module.scss'

interface BookListProps {
    books: any[]
}

const BookList = memo(({books}: BookListProps) => {
    return (
        <div className={cls.BookList}>
            {books.map(book =>
                <BookCard 
                    key={book.id} //Иногда бывает, что google api выдает книги с одинаковыми айдишниками
                    id={book.id}
                    img={book.volumeInfo?.imageLinks?.thumbnail} 
                    title={book.volumeInfo?.title}
                    category={book.volumeInfo?.categories}
                    authors={book.volumeInfo?.authors}
                />    
            )}
        </div>
    );
});

export default BookList;