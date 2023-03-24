import { FC } from 'react';
import { Link } from 'react-router-dom';

import cls from './BookDetailsOnPage.module.scss'

interface BookDetailsOnPageProps {
    img?: string
    title?: string
    categories?: string[]
    authors?: string[]
    description?: string
}

const BookDetailsOnPage = ({img, title, categories, authors, description}: BookDetailsOnPageProps) => {

    return (
        <div className={cls.Book}>
            {!!img && <img className={cls.Book__img} src={img} alt={title} />}
            <div className={cls.Info}>
                <Link className={cls.Book__btn} to='/'>Вернуться назад</Link>
                <h1 className={cls.Info__title}>{title}</h1>
                {!!authors && <h2 className={cls.Info__authors}>{authors.join(', ')}</h2>}
                {!!categories && <p className={cls.Info__categories}>{categories.join(', ')}</p>}
                {!!description && <p dangerouslySetInnerHTML={{ __html: description }}></p>}
            </div>
        </div>
    );
};

export default BookDetailsOnPage;