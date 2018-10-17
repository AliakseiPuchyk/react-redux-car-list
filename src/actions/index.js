let rowId = 0;
export const addRow = data => ({
    type: "ADD_ROW",
    id: rowId++,
    data
});
