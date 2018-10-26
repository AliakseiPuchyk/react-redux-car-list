const initialState = {
    rows: [],
    pagesAmount: 0,
    rowsPerPage: 10,
    currentPage: 1
};

export function tableApp(state = initialState, action) {
    switch (action.type) {
        case "SAVE_ROWS":
            return Object.assign({}, state, {
                rows: [...action.data]
            });
        case "CHANGE_PAGE":
            return Object.assign({}, state, {
                currentPage: action.data
            });
        case "SAVE_COLLECTION_LENGTH":
            return Object.assign({}, state, {
                pagesAmount: action.data
            });
        default:
            return state;
    }
}
