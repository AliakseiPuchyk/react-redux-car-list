import * as listOfActions from "../actions";

const pageNumber = "200";
const row = [{ vin: "00000", color: "green", year: "0000" }];
const collectionLength = "200";

describe("List of Actions", () => {
    it("should create an action to set the selected number of page", () => {
        const selectedPage = pageNumber;
        const expectedAction = {
            data: selectedPage,
            type: listOfActions.CHANGE_PAGE
        };
        expect(listOfActions.changePage(selectedPage)).toEqual(expectedAction);
    });
    it("should create an action to save row", () => {
        const loadedRow = row;
        const expectedAction = {
            data: loadedRow,
            type: listOfActions.SAVE_ROWS
        };
        expect(listOfActions.saveRows(loadedRow)).toEqual(expectedAction);
    });
    it("should create an action to save length of collection", () => {
        const loeadedCollectionLength = collectionLength;
        const expectedAction = {
            data: loeadedCollectionLength,
            type: listOfActions.SAVE_COLLECTION_LENGTH
        };
        expect(
            listOfActions.saveCollectionLength(loeadedCollectionLength)
        ).toEqual(expectedAction);
    });
});
