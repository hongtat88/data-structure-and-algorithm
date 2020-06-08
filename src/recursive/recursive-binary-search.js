exports.recursiveBinarySearch = async function (list, target, startIndex, lastIndex) {
    if (startIndex === undefined) startIndex = 0;
    if (lastIndex === undefined) lastIndex = list.length - 1;

    const mid = startIndex + parseInt((lastIndex - startIndex) /2);
    if (list[mid] === target) {
        return mid;
    } else if (list[mid] < target) {
        return await exports.recursiveBinarySearch(list, target, mid + 1, lastIndex);
    } else if (list[mid] > target) {
        return await exports.recursiveBinarySearch(list, target, startIndex, mid -1);
    }

    return -1;
}