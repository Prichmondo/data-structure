"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideAndConquerSearch = void 0;
function divideAndConquerSearch(arr, comparer, match) {
    let mid = Math.floor(arr.length / 2);
    let length = arr.length;
    while (length > 0) {
        if (match(arr[mid])) {
            return arr[mid];
        }
        length = Math.floor(length / 2);
        if (comparer(arr[mid])) {
            mid = mid + length;
        }
        else {
            mid = mid - length;
        }
    }
    return null;
}
exports.divideAndConquerSearch = divideAndConquerSearch;
