import { ChangeEvent, memo } from 'react';
import Select, { Option }  from 'src/shared/UI/Select/Select';

import cls from './Filter.module.scss'

interface FilterProps {
    title: string
    options: Option[]
    filter?: string
    handleChangeFilter?: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Filter = memo(({title, options, filter, handleChangeFilter}: FilterProps) => {
    return (
        <div className={cls.Filter}>
            <h2 className={cls.Filter__title}>{title}</h2>
            <Select onChange={handleChangeFilter} value={filter} options={options} />
        </div>
    );
});

export default Filter;