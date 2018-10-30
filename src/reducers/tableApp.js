import * as listOfActions from "../actions";

export const initialState = {
    rows: [],
    pagesAmount: 0,
    rowsPerPage: 10,
    currentPage: 1
};

export function tableApp(state = initialState, action) {
    switch (action.type) {
        case listOfActions.SAVE_ROWS:
            return Object.assign({}, state, {
                rows: [...action.data]
            });
        case listOfActions.CHANGE_PAGE:
            return Object.assign({}, state, {
                currentPage: action.data
            });
        case listOfActions.SAVE_COLLECTION_LENGTH:
            return Object.assign({}, state, {
                pagesAmount: action.data
            });
        default:
            return state;
    }
}
