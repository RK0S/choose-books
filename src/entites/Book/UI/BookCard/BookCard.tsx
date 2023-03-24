import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from 'src/shared/config/routeConfig/routeConfig'

import cls from './BookCard.module.scss'

interface BookCardProps {
    img?: string
    title?: string
    category?: string[]
    authors?: string[]
    id: number
}

const BookCard = memo(({img, title, category, authors, id}: BookCardProps) => {
    return (
        <Link to={`/book/${id}`} className={cls.BookCard}>
            {!!img && <img className={cls.BookCard__img} src={img} alt={title} />}
            {!!category && <p className={cls.BookCard__category}>{category[0]}</p>}
            <p className={cls.BookCard__title}>{title}</p>
            {!!authors && <p className={cls.BookCard__authors}>{authors.join(', ')}</p>}
        </Link>
    );
});

export default BookCard;