const swap = async (list, sourceIndex, targetIndex) => {
    const temp = list[sourceIndex];
    list[sourceIndex] = list[targetIndex];
    list[targetIndex] = temp;
    return list;
};

const partition = async (list, startIndex, endIndex) => {
    const pivot = list[endIndex];
    let pivotIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (list[i] < pivot) {
            await swap(list, i, pivotIndex);
            pivotIndex ++;
        }
    }

    await swap(list, pivotIndex, endIndex);
    return { pivotIndex, list };
};

exports.quickSort = async (list, startIndex, endIndex) => {
    if (startIndex === undefined) startIndex = 0;
    if (endIndex === undefined) endIndex = list.length - 1;

    if ((endIndex - startIndex) <= 1) return list;

    const partitionResponse = await partition(list, startIndex, endIndex);
    const pivotIndex = partitionResponse.pivotIndex;
    list = partitionResponse.list;

    list = await exports.quickSort(list, startIndex, pivotIndex - 1);
    list = await exports.quickSort(list, pivotIndex + 1, endIndex);
    return list;
};