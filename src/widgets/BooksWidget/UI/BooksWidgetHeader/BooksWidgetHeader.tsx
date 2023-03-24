import { SearchBooks } from 'src/features/SearchBooks';
import Heading from 'src/shared/UI/Heading/Heading';
import { ChangeFilter } from 'src/features/ChangeFilter';
import { ChangeSorting } from 'src/features/ChangeSorting';

interface BooksWidgetHeaderProps {
    getInfo: () => void
}

import cls from '../../styles/BooksWidget.module.scss'

const BooksWidgetHeader = ({getInfo}: BooksWidgetHeaderProps) => {
    return (
        <>
          <Heading className={cls.BooksWidget__header}>Search for books</Heading>
            <SearchBooks getInfo={getInfo} className={cls.BooksWidget__input} />
            <div className={cls.BooksWidget__filters}>
                <ChangeFilter />
                <ChangeSorting />
            </div>
            <hr className={cls.BooksWidget__hr} />  
        </>
    );
};

export default BooksWidgetHeader;