const initialState = {
    rows: [],
    pages: {}
};

let rowId = 0;

function tableApp(state = initialState, action) {
    switch (action.type) {
        case "SET_VISIBILE_ROWS":
            return Object.assign({}, state, {
                rows: [
                    ...state.rows,
                    {
                        data: action.data,
                        id: rowId++
                    }
                ]
            });
        case "CHANGE_PAGE":
            return Object.assign({}, state, {
                rows: rows(state.rows, action)
            });
        default:
            return state;
    }
}

function rows(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_PAGE":
            return console.log("CHANGE_PAGE");
        default:
            return state;
    }
}

export default tableApp;
