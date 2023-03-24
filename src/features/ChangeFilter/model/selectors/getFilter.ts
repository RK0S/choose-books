import { mainState } from 'src/app/providers/StoreProvider/config/mainState';

export const getFilter = (state: mainState) => state.filter.filter;
