import { mainState } from "src/app/providers/StoreProvider/config/mainState";

export const getFetchInfo = (state: mainState) => {
    return [state.query.query, state.filter.filter, state.sorting.sorting]
}