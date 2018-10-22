const initialState = {
    rows: [],
    visibleRows: [],
    pagesAmount: 0,
    rowsPerPage: 10,
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
                pagesAmount: Math.ceil(
                    (state.rows.length + 1) / state.rowsPerPage
                ),
                visibleRows:
                    state.rows.length <= state.rowsPerPage
                        ? [...state.rows]
                        : state.visibleRows
            });
        case "CHANGE_PAGE":
            let indexOfLastRow = action.data * state.rowsPerPage;
            let indexOfFirstRow = indexOfLastRow - state.rowsPerPage;

            return Object.assign({}, state, {
                currentPage: action.data,
                visibleRows: state.rows.slice(indexOfFirstRow, indexOfLastRow)
            });
        default:
            return state;
    }
}

export default tableApp;
