import { Filter } from 'src/entites/Filter';
import { optionsSort } from '../../model/types/optionsSort';
import { useSelector } from 'react-redux';
import { getSorting } from './../../model/selectors/getSorting';
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {changeSortingSlice} from './../../model/slice/changeSortingSlice';
import { ChangeEvent, memo} from 'react';

const ChangeSorting = memo(() => {
    const filter = useSelector(getSorting)
    const dispatch = useAppDispatch()
    const { setSorting } = changeSortingSlice.actions

    const handleChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSorting(e.target.value))
    }

    return (
        <Filter filter={filter} handleChangeFilter={handleChangeFilter} title='Sorting by' options={optionsSort} />
    );
});

export default ChangeSorting;