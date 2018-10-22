const initialState = {
    rows: [],
    pagesAmount: 0,
    rowsPerPage: 2,
    currentPage: 1
};

let rowId = 0;

function tableApp(state = initialState, action) {
    switch (action.type) {
        case "SAVE_ROW":
            return Object.assign({}, state, {
                rows: [
                    ...state.rows,
                    {
                        data: action.data,
                        id: rowId++
                    }
                ],
                pagesAmount: Math.ceil(state.rows.length / state.rowsPerPage)
            });
        case "CHANGE_PAGE":
            return Object.assign({}, state, {
                currentPage: action.data
            });
        default:
            return state;
    }
}

export default tableApp;
