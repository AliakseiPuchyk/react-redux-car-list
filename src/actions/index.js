export const CHANGE_PAGE = "CHANGE_PAGE";
export const SAVE_ROWS = "SAVE_ROWS";
export const SAVE_COLLECTION_LENGTH = "SAVE_COLLECTION_LENGTH";

export const changePage = data => ({
    type: CHANGE_PAGE,
    data
});
export const saveRows = data => ({
    type: SAVE_ROWS,
    data
});
export const saveCollectionLength = data => ({
    type: SAVE_COLLECTION_LENGTH,
    data
});
