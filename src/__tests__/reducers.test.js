import * as reducer from "../reducers/TableApp";
import * as listOfActions from "../actions";

const state = {
    currentPage: 1,
    pagesAmount: 0,
    rows: [],
    rowsPerPage: 10
};

const row = [{ color: "green", vin: "00000", year: "0000" }];
const page = 100;
const pagesAmount = 100;

describe("List of Reducers", () => {
    it("should return the initial state", () => {
        expect(reducer.tableApp(undefined, {})).toEqual(reducer.initialState);
    });
    it("shoould handle SAVE_ROWS", () => {
        const expectedData = {
            currentPage: 1,
            pagesAmount: 0,
            rows: [{ color: "green", vin: "00000", year: "0000" }],
            rowsPerPage: 10
        };
        expect(
            reducer.tableApp(state, {
                type: listOfActions.SAVE_ROWS,
                data: row
            })
        ).toEqual(expectedData);
    });
    it("shoould handle CHANGE_PAGE", () => {
        const expectedData = {
            currentPage: 100,
            pagesAmount: 0,
            rows: [],
            rowsPerPage: 10
        };
        expect(
            reducer.tableApp(state, {
                type: listOfActions.CHANGE_PAGE,
                data: page
            })
        ).toEqual(expectedData);
    });
    it("shoould handle SAVE_COLLECTION_LENGTH", () => {
        const expectedData = {
            currentPage: 1,
            pagesAmount: 100,
            rows: [],
            rowsPerPage: 10
        };
        expect(
            reducer.tableApp(state, {
                type: listOfActions.SAVE_COLLECTION_LENGTH,
                data: pagesAmount
            })
        ).toEqual(expectedData);
    });
});
