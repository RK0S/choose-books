import { useSelector } from 'react-redux';
import { Filter } from 'src/entites/Filter';
import { optionsCategories } from '../../model/types/optionsCategories';
import { getFilter } from './../../model/selectors/getFilter';
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { changeFilterSlice } from './../../model/slice/changeFilterSlice';
import { ChangeEvent } from 'react';

const ChangeFilter = () => {
    const filter = useSelector(getFilter)
    const dispatch = useAppDispatch()
    const { setFilter } = changeFilterSlice.actions

    const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <Filter handleChangeFilter={handleChangeFilter}  filter={filter} title='Category' options={optionsCategories} />
    );
};

export default ChangeFilter;