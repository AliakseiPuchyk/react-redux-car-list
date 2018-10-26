const initialState = {
    rows: [],
    pagesAmount: 500,
    rowsPerPage: 10,
    currentPage: 1
};

export function tableApp(state = initialState, action) {
    switch (action.type) {
        case "SAVE_ROW":
            return Object.assign({}, state, {
                rows: [
                    ...state.rows,
                    {
                        data: action.data
                    }
                ]
            });
        case "CHANGE_PAGE":
            return Object.assign({}, state, {
                currentPage: action.data,
                rows: []
            });
        default:
            return state;
    }
}
