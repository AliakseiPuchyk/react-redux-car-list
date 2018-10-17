const rows = (state = [], action) => {
    switch (action.type) {
        case "ADD_ROW":
            return [
                ...state,
                {
                    data: action.data,
                    id: action.id
                }
            ];

        default:
            return state;
    }
};

export default rows;
