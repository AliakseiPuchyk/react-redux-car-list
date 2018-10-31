import * as reducer from "../reducers/TableApp";
import * as listOfActions from "../actions";

const state = {
    currentPage: 1,
    pagesAmount: 0,
    rows: [],
    rowsPerPage: 10
};

const row = [{ color: "green", vin: "00000", year: "0000" }];
const expectedData = {
    currentPage: 1,
    pagesAmount: 0,
    rows: [{ color: "green", vin: "00000", year: "0000" }],
    rowsPerPage: 10
};

describe("List of Reducers", () => {
    it("should return the initial state", () => {
        expect(reducer.tableApp(undefined, {})).toEqual(reducer.initialState);
    });
    it("shoould handle SAVE_ROWS", () => {
        expect(
            reducer.tableApp(state, {
                type: listOfActions.SAVE_ROWS,
                data: row
            })
        ).toEqual(expectedData);
    });
});
