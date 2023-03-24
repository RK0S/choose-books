import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllBooks } from './../../API/GoogleApi/getAllBooks';
import { getMoreBooks } from './../../API/GoogleApi/getMoreBooks';
import { getFetchInfo } from '../../model/selectors/getFetchInfo';
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch/useAppDispatch';
import BooksWidgetHeader from '../BooksWidgetHeader/BooksWidgetHeader';
import BooksWidgetList from '../BooksWidgetList/BooksWidgetList';
import { getBooksInfo } from '../../model/selectors/getBooksInfo';

import cls from '../../styles/BooksWidget.module.scss';

const BooksWidget: FC = () => {
    const data = useSelector(getBooksInfo);
    const [startIndex, setStartIndex] = useState<number>(0);
    const fetchingInfo = useSelector(getFetchInfo);
    const dispatch = useAppDispatch();


    const getInfo = async () => {
        dispatch(getAllBooks(fetchingInfo));
    };

    const handleGetMoreBooks = () => {
        setStartIndex((prev) => prev + 30);
    };

    useEffect(() => {
        dispatch(getMoreBooks(fetchingInfo, startIndex));
    }, [startIndex]);

    return (
        <div className={cls.BooksWidget}>
            <BooksWidgetHeader getInfo={getInfo} />
            {!data.totalItems ? (
                <h2>Найдите интересующие вас книги</h2>
            ) : (
                <BooksWidgetList
                    books={data.books}
                    totalItems={data.totalItems}
                    getMoreBooks={handleGetMoreBooks}
                />
            )}
            {data.isLoading && <h2>Идёт загрузка...</h2>}
            {!!data.error && <h2>Произошла ошибка при загрузке книг: {data.error}</h2>}
        </div>
    );
};

export default BooksWidget;
