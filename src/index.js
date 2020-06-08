const { binarySearch } = require('./search-algorithms/binary-search');
const { sum } = require('./recursive/sum');
const { count } = require('./recursive/count');
const { findMaximum } = require('./recursive/find-maximun');
const { recursiveBinarySearch } = require('./recursive/recursive-binary-search');
const { quickSort } = require('./search-algorithms/quick-search');

(async () => {
    console.log('Search algorithm');
    let sortedArray = [1, 3, 4, 6, 10, 12, 15];
    let searchValue = 10;
    let searchResult = await binarySearch(sortedArray, searchValue);
    console.log(`The binary search index for ${searchValue} in [${sortedArray.join(', ')}] is ${searchResult}`);

    searchValue = 30;
    searchResult = await binarySearch(sortedArray, searchValue);
    console.log(`The binary search index for ${searchValue} in [${sortedArray.join(', ')}] is ${searchResult}`);

    let sumInput = [1, 3, 4, 6, 10, 12, 15];
    let sumResult = await sum(sumInput);
    console.log('Recursive');
    console.log(`The sum of [${sumInput.join(', ')}] is ${sumResult}`);

    let countInput = [5, 6, 7, 8, 1, 2, 4, 5];
    let countResult = await count(countInput);
    console.log(`The count of [${countInput.join(', ')}] is ${countResult}`);

    let findMaximumInput = [5, 6, 7, 88, 1, 2, 4, 89];
    let findMaximumResult = await findMaximum(findMaximumInput);
    console.log(`The max of [${findMaximumInput.join(', ')}] is ${findMaximumResult}`);

    // recursiveBinarySearch
    const recursiveBinarySearchList = [1, 3, 4, 6, 10, 12, 15];
    const recursiveBinarySearchValue = 10;
    const recursiveBinarySearchResult = await recursiveBinarySearch(recursiveBinarySearchList, recursiveBinarySearchValue);
    console.log(`The recursive binary search index for ${recursiveBinarySearchValue} in [${recursiveBinarySearchList.join(', ')}] is ${recursiveBinarySearchResult}`);

    let quickSortInput = [5, 6, 7, 88, 1, 2, 4, 89];
    let quickSortResult = await quickSort(quickSortInput);
    console.log(`The quick sort for [${quickSortInput.join(', ')}] is ${quickSortResult}`);
})();
