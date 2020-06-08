/**
 * 
 * @param {Array} sortedArray Sorted array to search
 * @param {any} value Value to search
 * @returns {int} Index of value. Return -1 if value is not found.
 */
exports.binarySearch = async (sortedArray, value) => {
    let firstIndex = 0;
    let lastIndex = sortedArray.length - 1;

    while (firstIndex <= lastIndex) {
        let middleIndex = parseInt((lastIndex - firstIndex) / 2) + firstIndex;
        if (sortedArray[middleIndex] === value) {
            return middleIndex;
        } else if (sortedArray[middleIndex] < value) {
            firstIndex = middleIndex + 1;
        } else {
            lastIndex = middleIndex - 1;
        }
    }
    return -1; // not found
}


